// 类可以作为类型
// (属性一样的就可以成为任意实例的类型.属性多与实例对象的不ky)

class Car{
    name:string
    constructor(name:string){
        this.name=name
    }
}

class ben extends  Car{
    age:string  //(当该类比其他类多了属性时,不能做比他少类的实例对象的类型)
    constructor(name:string){
        super(name) //继承
    }
}

// 类做实例的类型
const c1:Car =new Car('FL')
// const c2:ben =new Car('FL')  //(当该类比其他类多了属性时,不能做比他少类的实例对象的类型)
const B2:ben =new ben('ZL')
const B1:Car =new ben('ZL')  

