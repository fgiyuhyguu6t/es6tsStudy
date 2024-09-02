interface Istring{
    sing()
}
interface Idance{
    dence()
}
// 接口继承接口
interface Iall extends Istring,Idance{

}
class per2 implements Iall{
    sing() {
        console.log('继承接口istring');
    }
    dence() {
        console.log('继承接口dance');
        
    }
}