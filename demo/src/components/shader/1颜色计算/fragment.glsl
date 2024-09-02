#ifdef GL_ES
precision mediump float;
#endif
unifrom vec2 u_resolution

void main() {
    vec2 p =(gl_FragCoord.xy * 2.0 -u_resolution) /min(u_resolution.x,u_resolution.y);
    vec2 colorl=vec3(0.)
    vec2 color2=vec3(0.)
    vec2 color3=vec3(0.)
    if(distance(vec2(0.,0.2),vec2(p.xy))<=4){
        colorl=vec3(.0,.0,1.)
    }
}