// js函数声明 命名函数
function fun11 (a,b){
    console.log(a,b);
    return a+b
}
// 函数表达式 匿名函数 
let fun3 = function(c,d){
    return c+d
}


// ts中 函数声明 
// 命名函数 含类型

function add1(a:number,b:number):number{
    return a+b
}
// 函数表达式
 let add2 =function(c1:number,b1:number):number{
    return c1+b1
 }
console.log("add1",add1(4,5));
console.log("add2",add2(4,5));
let ccc:number =add1(3,4)
console.log("ccc",ccc);

// 完整的写法
let add3:(q:number,w:number)=>number =function(q:number,w:number):number{
    return q+w
 }