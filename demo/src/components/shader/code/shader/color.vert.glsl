attribute vec4 a_Position;
varying  vec4  v_Position;
attribute float b;
varying float c;
void main(){
    v_Position= a_Position;
    gl_Position=a_Position;
    //点的大小
    gl_PointSize=512.0;

    
}
