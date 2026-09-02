
varying vec2 vUv;

uniform sampler2D uImage;
uniform float uLayoutChangeProgress;
uniform float uLayoutChangeDirection;

void main() {
    vec2 newUV = vUv;

    float progress = clamp(uLayoutChangeProgress, 0.0, 1.0);

    // Match the vertex shader’s vertical profile.
    float centerY = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float curve = pow(centerY, 1.65);

    float amount = 0.65 * curve * progress;

    // -1.0: left source edge remains pinned.
    //  1.0: right source edge remains pinned.
    float pullRight = step(0.0, uLayoutChangeDirection);
    float pivot = pullRight;

    // The texture's sampled horizontal range contracts toward its pinned edge.
    // It makes the source image visibly stretch through the distorted mesh.
    newUV.x = pivot + (vUv.x - pivot) * (1.0 - amount);

    gl_FragColor = texture2D(uImage, newUV);
}


//varying float vNoise;
//varying vec2 vUv;
//uniform sampler2D uImage;
//uniform float time;
//uniform float uAniIn;
//uniform float uLayoutChangeProgress;
//uniform float uLayoutChangeDirection;
//
//void main() {
//
//    vec2 newUV = vUv;
//
//    float distFromEdge = min(vUv.y, 1.0 - vUv.y);
//    float area = smoothstep(0.5, 0.0, distFromEdge);
//    area = pow(area, 8.0);
//
//    float intensity = 0.80;
//    newUV.y -= (vUv.y - 0.5) * intensity * area * uLayoutChangeProgress;
//
//    gl_FragColor = texture2D(uImage, newUV);
//}