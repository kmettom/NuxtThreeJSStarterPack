
uniform float time;
uniform vec2 hover;
uniform float hoverState;
uniform float cursorPositionX;
uniform float cursorPositionY;
varying float vNoise;
uniform float aniIn;
varying vec2 vUv;


void main() {
  float dist = distance(uv,hover);
  vNoise = hoverState*sin(dist*10. - time);
  vec3 newposition = position;

  // newposition.y += hoverState * 5.;
  newposition.z += (1. - aniIn )*20.*sin(dist*10. + time) + hoverState * 5. ;

  //**************************************
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, (1. + ( 0. * (1. - aniIn)) - hoverState / 50. ) );

}
