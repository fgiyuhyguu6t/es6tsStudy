// 泛型约束，用接口
// 返回一个参数的长度
interface Ileng{
    length:number
}
function getLengthA<T extends Ileng>(str:T):number{
    return str.length
}
console.log('数组的长度：',getLengthA('777'));
