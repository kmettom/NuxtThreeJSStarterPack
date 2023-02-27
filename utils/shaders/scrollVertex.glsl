varying vec2 vUv;
uniform float scrollSpeed;

void main() {
  vec3 newposition = position;

  // newposition.x += (scrollSpeed * 1.); 

  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition , 1.0 );
}
