// 泛型（Generics）是指在定义函数、接口或类的时候，
// 不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
// 不确定什么类型，用<T> 泛型 
// 不建议用any

// function getArr<T>(vale:number,count:number):number[]{
function getArr<T>(vale:T,count:number):T[]{
    const arr11:T[]=[]
    for(let i=0;i<count;i++){
        arr11.push(vale)
    }
    return arr11
}
console.log("数组",getArr(23,4));
console.log("数组",getArr("23",4));