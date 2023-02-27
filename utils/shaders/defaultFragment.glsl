varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
// uniform float time;
uniform float hoverState;
uniform float cursorPositionX;
uniform float cursorPositionY;
uniform float aniIn;
uniform float aniOut;
varying float vOpacity;

void main()	{

    vec2 newUV = vUv;

    float rgbWithHoverR = 0.6 * ( aniIn ) + ( -0.2 * hoverState ) - ((0.75) * hoverState/3. ); // 75
    float rgbWithHoverG = 0.6 * ( aniIn ) + ( -0.2 * hoverState ) - ((0.24) * hoverState/3. ); // 24
    float rgbWithHoverB = 0.6 * ( aniIn ) + ( -0.2 * hoverState ) - ((0.44) * hoverState/3. ); // 44

    vec4 imageView =  texture2D( uImage , newUV ) * vec4( rgbWithHoverR , rgbWithHoverG , rgbWithHoverB, (1. * aniIn) - (1. * aniOut) );

    gl_FragColor = imageView;
    gl_FragColor.rgb -= 0.15*vec3(vNoise);
}
