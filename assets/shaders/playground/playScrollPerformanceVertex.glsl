varying vec2 vUv;

uniform float uLayoutChangeProgress;   // 0.0 -> 1.0
uniform float uLayoutChangeDirection;  // -1.0 = pull left, 1.0 = pull right, 0.0 = disabled

void main() {
    vUv = uv;

    vec3 transformed = position;

    float progress = clamp(uLayoutChangeProgress, 0.0, 1.0);

    // PlaneGeometry position.y is -0.5 at bottom and 0.5 at top.
    // 1.0 at the vertical center, 0.0 at top/bottom.
    float centerY = 1.0 - abs(position.y) * 2.0;

    // Higher exponent keeps the deformation flatter near the top/bottom.
    float curve = pow(centerY, 1.65);

    // Preserve the original direction behavior:
    // negative direction pins the left edge,
    // positive direction pins the right edge.
    float pullRight = step(0.0, uLayoutChangeDirection);
    float pinnedX = mix(-0.5, 0.5, pullRight);

    // Direction magnitude controls whether distortion is active.
    // -1.0 and 1.0 produce full distortion.
    // 0.0 produces no distortion.
    float directionStrength = abs(uLayoutChangeDirection);

    float amount =
    0.65 *
    curve *
    progress *
    directionStrength;

    transformed.x = pinnedX + (position.x - pinnedX) * (1.0 - amount);

    gl_Position = projectionMatrix *
    modelViewMatrix *
    vec4(transformed, 1.0);
}