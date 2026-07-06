precision highp float;

varying vec2 vUv;
uniform sampler2D uImage;

uniform float uAniInImage;   // 0..1 reveal progress

uniform vec2 uMeshSize;
uniform vec2 uTextureSize;

// --- tiny hash for per-tile randomness ---
float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

void main() {
    // --- cover UV (your existing logic) ---
    float meshAspect = uMeshSize.x / uMeshSize.y;
    float textureAspect = uTextureSize.x / uTextureSize.y;

    vec2 uv = vUv;
    if (meshAspect > textureAspect) {
        float scale = textureAspect / meshAspect;
        uv.y = uv.y * scale + (1.0 - scale) / 2.0;
    } else {
        float scale = meshAspect / textureAspect;
        uv.x = uv.x * scale + (1.0 - scale) / 2.0;
    }

    vec4 tex = texture2D(uImage, uv);

    // --- TILE REVEAL MASK ---
    float cols = clamp(5.0, 50.0, 200.0);

    float meshAR = uMeshSize.x / max(uMeshSize.y, 1.0);
    float rows = max(1.0, floor(cols / meshAR));

    vec2 grid = vec2(cols, rows);

    vec2 tileId = floor(uv * grid);

    float y01 = 1.0 - ((tileId.y + 0.5) / grid.y);
//    float x01 = (tileId.x + 0.5) / grid.x;

    float rnd = hash21(tileId);

    float jitter = (rnd - 0.5) * 0.15;
    float w = 0.10;
    float t0 = clamp(y01 + jitter, 0.0, 1.0 - w);

    float tileMask = smoothstep(t0, t0 + w, clamp(uAniInImage, 0.0, 1.0));

    // original image color
    vec3 color = tex.rgb;

    gl_FragColor = vec4(color, tex.a * tileMask);
}