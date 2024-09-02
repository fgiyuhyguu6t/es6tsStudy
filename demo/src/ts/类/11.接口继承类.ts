class NewPer{
    name:string
    constructor(name:string){
        this.name=name
    }
    sayhi(){
        console.log('hi');
    }
}
// 接口继承类
interface jiekou extends NewPer{
    age:number
}
// 接口约束对象
let perp:jiekou={
    name:'类的属性',
    age:12,
    sayhi(){}
}
console.log(perp);
