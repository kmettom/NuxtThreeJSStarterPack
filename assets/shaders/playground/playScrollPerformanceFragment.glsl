varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float time;
uniform float uAniIn;
uniform float uLayoutChangeProgress;
uniform float uLayoutChangeDirection;

void main() {

    vec2 newUV = vUv;

    float distFromEdge = min(vUv.x, 1.0 - vUv.x);
    //    float distFromEdge = min(vUv.y, 1.0 - vUv.y);
    float area = smoothstep(0.5, 0.0, distFromEdge);
    area = pow(area, 8.0);

    float intensity = 0.80;
    newUV.y -= (vUv.y - 0.5) * intensity * area * uLayoutChangeProgress;

    gl_FragColor = texture2D(uImage, newUV);

    // OLD BACKUP - clean
    //    vec4 color = texture2D(uImage, vUv);
    //    float layoutTransition = (1.0 - uLayoutChangeProgress);
    //    gl_FragColor = color * uAniIn * layoutTransition;
}