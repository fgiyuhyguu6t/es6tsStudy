// 定义一个函数，返回数字或者字符串的长度 
function getLength(x:string|number):number{
    // return x.toString().length
    // toString 返回字符串 转成string  
    // 字符串才有length
    // 

    // 类型断言 ：手动指定一个类型
    // 两种方法  1：变量 as 类型 (x as string)
    //  2. <类型>变量  (<string>x)
    if((<string>x).length){
    // if((x as string).length){
    // if(typeof x =="string"){
        return (<string>x).length
        // return (x as string).length
    }else{
        return x.toString().length

    }
}
console.log(getLength(123));
console.log(getLength("123"));


// any 类型可以访问任何属性和方法
// 江任何属性断言为any类型

// window a =10  // window 里面没有10

(window as any).a = 10


// any 类型别乱用

function fadd(x:any,y:any):any{
    return x+y
}

let f1 = fadd(1,2) 
let f12 = fadd(1,2) as number
let f3 = fadd('s','cc') as string