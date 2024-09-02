#ifdef GL_ES
precision mediump float;
#endif

void main() {
        //打印小数
        vec4 color = vec4(.5, 1., 0., 1.);
        //打印整数
        // vec4 color = vec4(50, 1., 0., 1.)/255.;
        gl_FragColor = color;
}