// 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
class Person{
    name:string
    age:number
    // 构造方法  constructor 定义构造函数。
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    // 方法
    sayhi(str:string){
        console.log('hi',str);
        
    }
}
// 对象（Object）：类的实例，通过 new 生成 会自动调用构造函数
let p1 = new Person('张三',18)
// 执行方法sayhi
p1.sayhi('字符串值')