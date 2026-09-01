uniform sampler2D tDiffuse;
varying vec2 vUv;
uniform float scrollSpeed;

void main(){
    vec2 newUV = vUv;

    float scrollSpeedClamp = clamp(scrollSpeed / 0.3, 0.0, 1.0);

    float distFromEdge = min(vUv.y, 1.0 - vUv.y) * scrollSpeedClamp;
    //    float distFromEdge = min(vUv.y, 1.0 - vUv.y);
    float area = smoothstep(0.9, 0.0, distFromEdge);
    area = pow(area, 8.0);

    float intensity = 0.10;
    newUV.x -= (vUv.x - 0.5) * intensity * area;

    gl_FragColor = texture2D(tDiffuse, newUV);
}