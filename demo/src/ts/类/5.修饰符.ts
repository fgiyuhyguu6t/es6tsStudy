// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问（包括子类）
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
class B{
    public name2:string //公有属性  哪里都
    private name3:string //私有属性  //可以继承，无法访问
    protected name4:string //保护属性  //可以继承，子类可以访问

    public constructor(name2:string,name3:string,name4:string){
        this.name2=name2
        this.name3=name3
        this.name4=name4
    }
    public p(){
        console.log(this.name3);
        // console.log(this.name2); 
    }
}

const bb = new B('HH','私有','保护')
console.log(bb.name2);
// console.log(bb.name3);  //name3 为类私有
bb.p()

class C extends B{
    constructor(name2:string,name3:string,name4:string){
        super(name2,name3,name4) //可以继承私有属name3
        console.log('构造方法实例后自动执行');
        console.log('构造方法里面',name2);
        console.log('构造方法里面',name3);
        console.log('构造方法里面',name4);
        
    }
    public sayhi(){
        console.log(this.name2);

        //子类继承来的name3.方法里面也不能访问。
        // console.log(this.name3); 
        
    }
    public saybaohu(){
        console.log('子类中的方法用了父类的保护属性',this.name4);
        
    }

}

const ccc1 =new C('子public','子私有','子保护')
// console.log(ccc1.name3);  //子类继承来的name3.不能访问。
console.log('c子类的实例对象',ccc1.name2); 
console.log('子类保护',ccc1.saybaohu()); 

// console.log(ccc1.name4); //子类的实例对象无法访问保护类型的属性






