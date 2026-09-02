varying float vNoise;
varying vec2 vUv;

uniform sampler2D uImage;
uniform float uTime;
uniform float uAniIn;
uniform float uLayoutChangeProgress;
uniform float uLayoutChangeDirection;

float sfract(float n) {
    return smoothstep(0.0, 1.0, fract(n));
}

float rand(vec2 n) {
    return fract(abs(sin(dot(n, vec2(5.3357, -5.8464)))) * 256.75 + 0.325);
}

float noise(vec2 n) {
    float h1 = mix(
            rand(vec2(floor(n.x), floor(n.y))),
            rand(vec2(ceil(n.x), floor(n.y))),
            sfract(n.x)
    );
    float h2 = mix(
            rand(vec2(floor(n.x), ceil(n.y))),
            rand(vec2(ceil(n.x), ceil(n.y))),
            sfract(n.x)
    );
    float s1 = mix(h1, h2, sfract(n.y));
    return s1;
}

void main() {
    vec3 baseCol = texture2D(uImage, vUv).rgb;

    // Wave distortion parameters
    float waveAmp = 0.035; // how strong the UV displacement is
    float waveFreq = 2.0;   // how many waves across the image
    float waveSpeed = 0.9;

    // Animate waves over time
    vec2 uv = vUv;
    float t = uTime * waveSpeed;

    // Multi-scale wave distortion
    vec2 distortion = vec2(
            noise(vec2(uv.y * waveFreq + t, uv.x * waveFreq * 0.7)),
            noise(vec2(uv.x * waveFreq + t, uv.y * waveFreq * 0.7))
    ) * 2.0 - 1.0; // range ~[-1,1]

    distortion *= waveAmp;

    // Distorted UVs
    vec2 uvDistorted = fract(vUv + distortion);

    // Sample image with distorted UVs
    vec3 distortedCol = texture2D(uImage, uvDistorted).rgb;

    // Mix between original and distorted based on progress
    // At progress = 0 -> baseCol, at progress = 1 -> distortedCol
    vec3 col = mix(baseCol, distortedCol, uLayoutChangeProgress);

    // Optional: very subtle brightness/contrast modulation with waves
    // (can be removed if you want it even simpler)
    float waveShade = noise(vUv * waveFreq + t) * 0.06 + 0.97; // ~[0.97, 1.03]
    col *= mix(1.0, waveShade, uLayoutChangeProgress);

    gl_FragColor = vec4(col, 1.0);
}