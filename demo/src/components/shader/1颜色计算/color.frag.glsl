#ifdef GL_ES //声明着色器
precision mediump float;//精度
#endif //

uniform vec2 u_resolution;//画布宽高

void main(){
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
        vec3 color1=vec3(0.);
        vec3 color2=vec3(0.);
        vec3 color3=vec3(0.);
        if(distance(vec2(0.,0.2),vec2(p.xy))<=.4)
        {
               color1=vec3(.0,.0,1.);
        }

         if(distance(vec2(-.2,-.2),vec2(p.xy))<=.4)
        {
               color2=vec3(1.,.0,0.);
        }
         if(distance(vec2(.2,-.2),vec2(p.xy))<=.4)
        {
               color3=vec3(.0,1.,0.);
        }
        
       //  vec3 color=vec3(0.,0.,0.)+color1 + color2 + color3;

             vec3 color=vec3(0.,0.,0.)+color1 - color2; //蓝色    vec3(0.,0.,1.) - vec3(1.,.0,0.) = vec3(0.,0.,1.)
           //vec3 color=vec3(1.,0.,0.)+color1 * color2 * color3; //红色   vec3(1.,0.,0.) +  vec3(.0,.0,1.)* vec3(1.,.0,0.)*vec3(.0,1.,0.)
       //       vec3 color=vec3(0.,0.,0.)+color1 / color2; //蓝色
        gl_FragColor=vec4(color,1.);
}