
varying vec2 vUv;

uniform float uLayoutChangeProgress;   // 0.0 -> 1.0
uniform float uLayoutChangeDirection;  // -1.0 = pull left, 1.0 = pull right

void main() {
    vUv = uv;

    vec3 transformed = position;

    float progress = clamp(uLayoutChangeProgress, 0.0, 1.0);

    // PlaneGeometry position.y is -0.5 at bottom and 0.5 at top.
    // 1.0 at the vertical center, 0.0 at top/bottom:
    float centerY = 1.0 - abs(position.y) * 2.0;

    // Higher exponent = the deformation stays flatter near top/bottom
    // and pinches more sharply at the middle.
    float curve = pow(centerY, 1.65);

    // Convert from -1/1 to 0/1.
    float pullRight = step(0.0, uLayoutChangeDirection);

    // Original geometry x range: -0.5 to 0.5.
    // Direction -1 pins the left edge; direction 1 pins the right edge.
    float pinnedX = mix(-0.5, 0.5, pullRight);

    // Amount to move the unpinned side inward.
    // 0.65 means up to 65% of the normalized plane width.
    float amount = 0.65 * curve * progress;

    // Scale position around the pinned edge.
    transformed.x = pinnedX + (position.x - pinnedX) * (1.0 - amount);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}

//uniform float uTime;
//uniform vec2 hover;
//varying float vNoise;
//varying vec2 vUv;
//
//void main() {
//    vec3 newposition = position;
//    vUv = uv;
//    gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.0);
//}