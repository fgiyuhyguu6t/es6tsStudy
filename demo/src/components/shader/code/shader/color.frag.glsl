// #extension EXT_draw_buffers : require
#ifdef GL_ES
precision mediump float;
#endif

varying  vec4  v_Position;
void main(){
//1.片元的颜色
gl_FragColor = vec4(1. );

//2.片元在canvas坐标系中的坐标
// if(gl_FragCoord.x>100.){
// gl_FragColor = vec4(1.,1.,0.,1. );
// }

//3.gl_PointCoord 点的坐标系 [0,1]
// if(gl_PointCoord.x>.5){
// gl_FragColor = vec4(1.,1.,0.,1. );
// }


//4.v_Position  与gl_Position
// gl_FragColor =vec4(v_Position.x+10.)/255.;


// //5. gl_FrontFacing
//  if (gl_FrontFacing) {
//       gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
//     } else {
//       gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
//     }
// 6. gl_FragData
//gl_FragData 
//  gl_FragData[0] = vec4(1.0, 1.0, 0.0, 1.0);
//  gl_FragData[1] = vec4(1.0, 1.0, 1.0, 1.0);


//gl_MaxTextureImageUnits 
// int b = gl_MaxTextureImageUnits;
// gl_FragColor = vec4(b)/255.;


//gl_MaxVertexAttribs
 int b = gl_MaxVertexAttribs;
 gl_FragColor = vec4(b)/255.;

}