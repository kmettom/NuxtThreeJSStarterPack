uniform float time;
uniform vec2 hover;
// uniform float hoverState;
varying float vNoise;
uniform float aniIn;

// uniform float aniOut;
varying vec2 vUv;


void main() {
  float dist = distance(uv,hover);

  vec3 newposition = position;

  // newposition.y += hoverState * 5.;
  // newposition.z += (1. - aniIn )*20.*sin(dist*10. + time);
  newposition.z += ( 1. - aniIn ) * 30. * ( sin( dist * 3. + time ) ) ;

  //**************************************

  vUv = uv;

  // gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, (1. + ( 0. * (1. - aniIn)) - hoverState / 50. ) );
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, (1. + ( 0. * (1. - aniIn)) ) );

}
