
uniform float time;
uniform vec2 vectorWave;
uniform vec2 vectorVNoise;
uniform float hoverState;
uniform float cursorPositionX;
uniform float cursorPositionY;
uniform float aniIn;
uniform float aniOut;
uniform float aniOutToArticle;
varying float vNoise;
varying vec2 vUv;


void main() {
  // float distToCenter = distance( uv , hover );
  float distVnoise = distance( uv , vectorVNoise );
  vNoise = hoverState*sin(distVnoise*10. - time);

  float distWave = distance( uv , vectorWave );

  vec3 newposition = position;

  newposition.y += ( hoverState * 2. );

  newposition.z += (( 1. - aniIn ) * 70. * sin( distWave * 333. + time ));

  //**************************************
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, ( 1. + ( 0. * (1. - aniIn)) - (hoverState / 10.) ) );

}
