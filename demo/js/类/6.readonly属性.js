// readonly只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。
class An {
    // readonly age:number
    // 如果readonly定义在参数上,会创建并初始化age参数
    // 在构造函数里面定义参数的类型,都会创建并初始化. 任何类型都可以
    constructor(age, a) {
        this.age = age;
        this.a = a;
        // this.age=age
    }
    update() {
        // this.age=88 //只读无法修改
    }
}
const x1 = new An(98, 9);
console.log(x1.age);
// x1.age=90  //只读无法修改
