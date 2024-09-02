// static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
// 只属于类自己的属性和方法
class A {
    static name1: string
    // constructor(name1:string){
    //     this.name1=name1
    // }
    static sayhi() {
        console.log("hi");
    }
}
const aa2= new A()
console.log('看看',A.name1);
A.sayhi();

// aa2.sayhi()  //实例对象无法执行类的静态方法