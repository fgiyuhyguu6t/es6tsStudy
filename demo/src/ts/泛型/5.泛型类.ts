class Personp<t>{
    name:string
    age:t
    constructor(name:string,age:t){
        this.name=name
        this.age=age
    }
    hh(){
        console.log(this.name,this.age);
        
    }
}
const pp1=new Personp<string>('ssas','44')
const pp2=new Personp<number>('sss',4)
pp1.hh()
pp2.hh()