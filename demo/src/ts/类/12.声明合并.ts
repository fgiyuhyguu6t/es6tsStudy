// 函数合并就是重载

// 接口合并
// 属性相同，属性值相同 
// 合并属性类型必须唯一
// 类和接口合并一样
interface Cat{
    name:'猫'
}
interface Cat{
    name:'猫',
    age:3
}
// 

// 接口类型的变量
const catt:Cat={
    name:'猫',
    age:3
}