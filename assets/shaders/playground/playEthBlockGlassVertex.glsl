
precision highp float;

#define MAX_GLASS 6

varying vec2 vUv;

uniform sampler2D uSceneTexture;

uniform vec4 uBlocks[MAX_GLASS];
uniform int uBlockCount;

uniform vec2 uMeshSize;
uniform vec2 uViewport;
uniform vec2 uMouse;
uniform float uDevicePixelRatio;

uniform float uHoverProgress;
uniform int uHoverBlockIndex;

// Wave configuration
const float WAVE_WIDTH = 200.30;
const float WAVE_STRENGTH = 220.08;
const float WAVE_FREQUENCY = 5.0;
const float WAVE_PHASE = 6.28318530718;

// Converts the vertex UV into block-local coordinates.
//
// Returned coordinates:
// x: -1.0 at the left edge, 1.0 at the right edge
// y: -1.0 at the bottom edge, 1.0 at the top edge
vec2 getBlockCoordinates(vec2 vertexUv, vec4 rect) {
    vec2 blockCenter = vec2(0.5) + rect.xy / uMeshSize;
    vec2 blockHalfSize = rect.zw / uMeshSize;

    return (vertexUv - blockCenter) / blockHalfSize;
}

// Returns a rounded rectangle mask similar to the fragment shader.
// The mask is intentionally not used to restrict the wave because the
// requested deformation may extend naturally through the block shape.
float getRoundedBoxValue(vec2 blockCoords) {
    const float boxRadius = 20.0;

    return pow(abs(blockCoords.x), boxRadius) +
    pow(abs(blockCoords.y), boxRadius);
}

vec3 glassPassHover(
        vec3 newPosition,
        vec4 rect,
        float hoverActive
) {
    if (hoverActive <= 0.0) {
        return newPosition;
    }

    vec2 blockCoords = getBlockCoordinates(vUv, rect);

    /*
     * The fragment shader uses:

         reflectionY = mix(1.0, -1.0, uHoverProgress);

     * Here the same coordinate system is used:
     *   1.0  = block top
     *  -1.0 = block bottom
     */
    float progress = clamp(uHoverProgress, 0.0, 1.0);

    float reflectionY = mix(1.0, -1.0, progress);
    float reflectionDistance = abs(blockCoords.y - reflectionY);

    /*
     * Reflection band.

     * A smoothstep creates a soft band instead of a hard edge.
     * The result is strongest at the moving reflection center.
     */
    float reflectionBand =
    1.0 - smoothstep(
            0.0,
            WAVE_WIDTH,
            reflectionDistance
    );

    /*
     * Fade the wave in after progress 0.0 and fade it out before 1.0.

     * This prevents the wave from being visible exactly at either
     * endpoint, as requested.
     */
    float startFade = smoothstep(0.0, 0.12, progress);
    float endFade = 1.0 - smoothstep(0.88, 1.0, progress);
    float progressFade = startFade * endFade;

    /*
     * Shape the deformation as a traveling pulse.

     * The center of the band produces the largest bulge.
     * The cosine gives the wave a smooth refractive profile.
     */
    float pulse = 0.5 + 0.5 * cos(
            (reflectionDistance / WAVE_WIDTH) * WAVE_PHASE
    );

    /*
     * Make the pulse strongest at the center of the reflection band
     * and smoothly reduce it toward the edges.
     */
    pulse *= reflectionBand;

    /*
     * Reduce the deformation near the horizontal edges of the block.
     * This keeps the bulge visually concentrated inside the glass.
     */
    float horizontalFalloff =
    1.0 - smoothstep(0.65, 1.0, abs(blockCoords.x));

    /*
     * Optional rounded-box influence.

     * Since the requested wave is allowed to deform through the shape,
     * this is intentionally subtle rather than a strict clipping mask.
     */
    float roundedBox = getRoundedBoxValue(blockCoords);
    float shapeFalloff = 1.0 - smoothstep(0.85, 1.25, roundedBox);

    float displacement =
    WAVE_STRENGTH *
    pulse *
    horizontalFalloff *
    shapeFalloff *
    progressFade;

    newPosition.z += displacement;

    return newPosition;
}

void main() {
    vec3 newPosition = position;

    vUv = uv;

    for (int i = 0; i < MAX_GLASS; i++) {
        if (i >= uBlockCount) {
            break;
        }

        float hoverActive =
        uHoverBlockIndex == i
        ? 1.0
        : 0.0;

        newPosition = glassPassHover(
                newPosition,
                uBlocks[i],
                hoverActive
        );
    }

//    newPosition.z += 10.0;

    gl_Position =
    projectionMatrix *
    modelViewMatrix *
    vec4(newPosition, 1.0);
}



// OLD BACKUP


//#define MAX_GLASS 6
//
//varying vec2 vUv;
//uniform sampler2D uSceneTexture;
//uniform vec4 uBlocks[MAX_GLASS];
//uniform int uBlockCount;
//uniform vec2 uMeshSize;
//uniform vec2 uViewport;
//uniform vec2 uMouse;
//uniform float uDevicePixelRatio;
//uniform float uHoverProgress;
//uniform int uHoverBlockIndex;
//
//vec4 glassPassHover(
//        vec3 newposition,
//        vec4 rect,
//        float hoverActive
//) {
//
//};
//
//void main() {
//    vec3 newposition = position;
//    vUv = uv;
//
//    //*****************************
//
//    //    vec2 uv = vUv;
//    //    vec4 color = texture2D(uSceneTexture, uv);
//
//    for (int i = 0; i < MAX_GLASS; i++) {
//        if (i >= uBlockCount) {
//            break;
//        }
//
//        float hoverActive =
//        uHoverBlockIndex == i
//        ? 1.0
//        : 0.0;
//
//        newPosition = glassPassHover(newPosition, uBlocks[i], hoverActive);
//    }
//
//
//    //*****************************
//
//
//    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
//}

