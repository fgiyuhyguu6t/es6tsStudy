// 接口约束类  类实现接口
interface Istring{
    sing()
}
interface Idance{
    dence()
}
class per implements Istring,Idance{
    sing() {
        console.log('继承接口istring');
    }
    dence() {
        console.log('继承接口dance');
        
    }
}
class an implements Idance,Istring{
    dence() {
        console.log('继承接口dance');
    }
    sing() {
        console.log('竟然可以');
    }
}
const pa =new per()
const ac =new an()
pa.sing()
pa.dence()
ac.dence()
ac.sing()