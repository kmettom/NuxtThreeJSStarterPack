precision highp float;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform sampler2D uTexturePrevious;
uniform sampler2D uTextureMaskNoise;
uniform float uTransactionsAmount;
uniform float uTransitionProgress;
uniform vec2 uMeshSize;
uniform vec2 uTextureSize;
uniform float uVector;

#define S(v) smoothstep(0., 1.5 * fwidth(v), v)

vec2 mirror(vec2 v) {
    vec2 m = mod(v, 2.0);
    return mix(m, 2.0 - m, step(1.0, m));
}

vec2 coverUv(vec2 raw) {
    float meshAspect = uMeshSize.x / uMeshSize.y;
    float textureAspect = uTextureSize.x / uTextureSize.y;
    vec2 uv = raw;
    if (meshAspect > textureAspect) {
        float s = textureAspect / meshAspect;
        uv.y = uv.y * s + (1.0 - s) * 0.5;
    } else {
        float s = meshAspect / textureAspect;
        uv.x = uv.x * s + (1.0 - s) * 0.5;
    }
    return uv;
}

void main()
{
    vec2 uv = coverUv(vUv);

    float direction = sign(uVector);
    if (direction == 0.0) direction = 1.0;

    float mask = texture(uTextureMaskNoise, uv).r;
    float offset = mask * direction * uTransactionsAmount;

    float stepMask = S(mask - uTransitionProgress);

    vec2 uvPrev = mirror(vec2(
            uv.x,
            uv.y + uTransitionProgress * offset
    ));

    vec2 uvNext = mirror(vec2(
            uv.x,
            uv.y - (1.0 - uTransitionProgress) * offset
    ));

    vec4 img2 = texture(uTexturePrevious, uvPrev);
    vec4 img1 = texture(uTexture, uvNext);

    gl_FragColor = mix(img1, img2, stepMask);
}