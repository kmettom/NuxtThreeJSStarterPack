uniform float uTime;
uniform vec2 hover;
varying float vNoise;
varying vec2 vUv;
uniform float uLayoutChangeProgress;
uniform float uLayoutChangeDirection;

void main() {
    vUv = uv;
    vec3 newPos = position;
    float intensity = 0.2;
    float waveAmp = 2.0;
    newPos.y += sin(uLayoutChangeDirection * uTime + position.x * waveAmp) * intensity * uLayoutChangeProgress;
    newPos.x += sin(uLayoutChangeDirection * uTime + position.x * waveAmp) * intensity/3.0 * uLayoutChangeProgress;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}