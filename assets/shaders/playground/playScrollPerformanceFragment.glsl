varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float time;
uniform float uAniIn;

void main() {
    vec4 color = texture2D(uImage, vUv);
    gl_FragColor = color * uAniIn;
}