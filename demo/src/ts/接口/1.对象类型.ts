// 接口 它是对行为的抽象，用于对 对象的形状（shape）进行描述，理解为一种约束
// 接口名称首字母大写
// 定义的变量继承接口的所有属性，不能做添加 （含可选属性）
// [proName:string]:string  任意属性和任意属性值确定的话。其他的确定属性都必须是他的类型的子集
interface IPerson{
    readonly id :number //只读属性
    name:string
    age:number
    sex?:string  // ?表示可选属性
    // [proName:string]:any   //任意属性和任意属性值
    [proName:string]:string|number  //联合类型
}
// 定义一个对象继承接口
let p:IPerson={
    id:1,
    name:'zfc',
    age:15,
    sex:'男',
    wa:'可以添加属性因为有任意属性'
}
// p.id=2  //id为只读属性
p.name='改名字'