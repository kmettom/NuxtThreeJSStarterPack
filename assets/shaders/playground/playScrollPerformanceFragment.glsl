
varying float vNoise;
varying vec2 vUv;

uniform sampler2D uImage;
uniform float uTime;
uniform float uAniIn;
uniform float uLayoutChangeProgress;
uniform float uLayoutChangeDirection;

void main() {
    vec4 color = texture2D(uImage, vUv);
//    color.a *= uAniIn;
    gl_FragColor = color;
}