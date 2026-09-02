varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float time;
uniform float uAniIn;

void main() {
    gl_FragColor = texture2D(uImage, vUv);
}