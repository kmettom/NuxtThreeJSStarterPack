uniform float uTime;
uniform vec2 hover;
varying float vNoise;
varying vec2 vUv;
uniform float uLayoutChangeProgress;
uniform float uLayoutChangeDirection;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}