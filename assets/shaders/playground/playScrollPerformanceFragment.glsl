varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float time;
uniform float uAniIn;
uniform float uLayoutChangeProgress;
uniform float uLayoutChangeDirection;

void main() {
    gl_FragColor = texture2D(uImage, vUv);
}