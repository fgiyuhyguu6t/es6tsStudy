// abstract抽象类不能实例化 
// 可以继承.抽象类就是为子类服务的
// 定义一个抽象类
abstract class Ya{
    abstract ny:string //抽象属性  不能被继承.要在子类里面重新实现
    // na:string
    // constructor(na:string){
    //     this.na=na
    // }
    abstract sayhi() //抽象方法不能具体实现
}

// 不能实例化
// 继承
class jjj extends Ya{
    ny:string  //重新实现
    constructor(ny:string){
        super()  //不能继承抽象属性
        this.ny=ny  //初始化
    }
    // 子类继承抽象类必须去 具体实现 抽象类中的抽象方法和抽象方法
    sayhi() {
        console.log('子类里面具体实现方法了');
        
    }
}

// 实例子类对象
const zz =new jjj("hh")
console.log(zz.ny);
