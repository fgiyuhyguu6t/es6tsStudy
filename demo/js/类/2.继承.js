// 扩展现有的类，用过继承
// 继承：类与类之间的关系
// 子类继承父类
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 父类方法
    sayhi(str) {
        console.log('hi', str);
    }
}
// 子类
class Dog extends Animal {
    constructor(name, age) {
        super(name, age); //调用父类的构造函数 使用super
    }
    //    可以调用父类的sayhi方法，还可以重写
    sayhi(str) {
        console.log('hello', str);
        super.sayhi('狗狗'); //通过super调用父类的方法
    }
}
const cat = new Animal('小猫', 4);
cat.sayhi('小猫');
const gougou = new Dog('狗', 2);
gougou.sayhi('小狗');
// 类与类之间存在继承关系，通过extends继承
// 子类可以调用父类方法 通过super 
// 子类可以重写父类方法
