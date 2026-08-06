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

float boxRadius = 20.0;

float createCircleMask(float radiusPx, float featherPx) {
    vec2 viewportUv = gl_FragCoord.xy / (uViewport * uDevicePixelRatio);
    vec2 mouseUv = vec2(uMouse.x, 1.0 - uMouse.y);

    float aspect = uViewport.x / uViewport.y;
    vec2 delta = viewportUv - mouseUv;
    delta.x *= aspect;

    float dist = length(delta);
    float radius = radiusPx / uViewport.y;
    float feather = featherPx / uViewport.y;

    return 1.0 - smoothstep(radius, radius + feather, dist);
}

vec4 glassPass(vec2 vUv, vec2 uv, vec4 baseColor, vec4 rect, bool isHovered) {
    vec2 glassCenter = vec2(0.5) + rect.xy / uMeshSize;
    vec2 glassHalfUv = rect.zw / uMeshSize;

    vec2 m2 = (vUv - glassCenter) / glassHalfUv;
    float roundedBox = pow(abs(m2.x), boxRadius) + pow(abs(m2.y), boxRadius);
    if (isHovered){
        float hoverEffectBoxRadius = boxRadius * (1.0 - uHoverProgress);
        roundedBox = pow(abs(m2.x), hoverEffectBoxRadius) + pow(abs(m2.y), hoverEffectBoxRadius);
    }

    float rb1 = clamp((1.00 - roundedBox) * 8.0, 0.0, 1.0);
    float rb2 = clamp((0.95 - roundedBox) * 16.0, 0.0, 1.0) -
    clamp((0.90 - roundedBox) * 16.0, 0.0, 1.0);
    float rb3 = clamp((1.50 - roundedBox) * 2.0, 0.0, 1.0) -
    clamp((1.00 - roundedBox) * 2.0, 0.0, 1.0);

    float transition = smoothstep(0.0, 1.0, rb1 + rb2);
    if (transition <= 0.0) return baseColor;

    float mouseCircle = createCircleMask(20.0, 125.0);

    // Restrict enhancement to visible glass only
    float boost = mouseCircle * transition;

    vec2 fromCenter = vUv - glassCenter;
    float centerFalloff = 1.0 - clamp(length(fromCenter / glassHalfUv), 0.0, 1.0);

    // Base lens distortion
    float distortStrength = 0.5 + boost * 0.9;
    vec2 distortDir = fromCenter * (0.15 + 0.35 * centerFalloff + 0.5 * boost);

    vec2 lensUv = glassCenter + fromCenter * (1.0 - roundedBox * distortStrength);
    lensUv += distortDir * 0.06 * boost;

    // Stronger local blur around mouse
    vec4 blurred = vec4(0.0);
    float total = 0.0;
    float blurScale = 0.5 + boost * 1.75;

    for (float x = -4.0; x <= 4.0; x++) {
        for (float y = -4.0; y <= 4.0; y++) {
            vec2 off = vec2(x, y) * blurScale / uMeshSize;
            blurred += texture2D(uSceneTexture, lensUv + off);
            total += 1.0;
        }
    }
    blurred /= total;

    // RGB split along the distortion vector
    vec2 chromaDir = normalize(distortDir + vec2(0.00001));
    vec2 chromaOff = chromaDir * (0.004 + 0.012 * boost);

    vec4 aberration;
    aberration.r = texture2D(uSceneTexture, lensUv + chromaOff).r;
    aberration.g = texture2D(uSceneTexture, lensUv).g;
    aberration.b = texture2D(uSceneTexture, lensUv - chromaOff).b;
    aberration.a = 1.0;

    vec4 refracted = mix(blurred, aberration, 0.35 + 0.45 * boost);

    vec2 m2uv = vUv - glassCenter;
    float gradient =
    clamp((clamp(m2uv.y, 0.0, 0.2) + 0.1) * 0.5, 0.0, 1.0) +
    clamp((clamp(-m2uv.y, -1000.0, 0.2) * rb3 + 0.1) * 0.5, 0.0, 1.0);

    vec4 lighting = clamp(
            refracted
            - vec4(vec3(rb1 * gradient * 0.95), 0.0)
            - vec4(vec3(rb2 * 0.3), 0.0),
            0.0, 1.0
    );

    // Slight highlight ring near cursor inside glass
    float ring = smoothstep(0.55, 1.0, mouseCircle) * (1.0 - smoothstep(0.85, 1.0, mouseCircle));
    lighting.rgb += vec3(0.06, 0.08, 0.12) * ring * transition;

    float glassOpacity = clamp(0.85 + transition * 0.9, 0.0, 1.0);
    glassOpacity = clamp(glassOpacity + boost * 0.08, 0.0, 1.0);

    return mix(baseColor, lighting, glassOpacity);
}

void main() {
    vec2 uv = vUv;
    vec4 color = texture2D(uSceneTexture, uv);

    for (int i = 0; i < MAX_GLASS; i++) {
        if (i >= uBlockCount) break;
        if (uHoverBlockIndex == i){
            color = glassPass(vUv, uv, color, uBlocks[i], true);
        } else {
            color = glassPass(vUv, uv, color, uBlocks[i], false);
        }
    }

    gl_FragColor = color;
}