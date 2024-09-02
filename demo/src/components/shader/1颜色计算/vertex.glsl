varying float vRandom;

void main() {
  vRandom = aRandom;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 ) ;//位置转化
        
}


