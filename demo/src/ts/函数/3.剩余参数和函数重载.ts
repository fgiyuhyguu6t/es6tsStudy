// 剩余参数 ...args  可以定义类型 :number[] ...args:string[]
// function fn(x:string,y:string,...args:number[]){
function fn(x:string,y:string,...args){
    return x+y+args
}
console.log(fn('','',1245));
console.log(fn('zfc','zfcccc','hj'));

// 函数重载   函数名相同 参数不同的多个函数
// 数字 相加   字符串 拼接
function newARR(x:number,y:number):number
function newARR(x:string,y:string):string
function newARR(x: string | number,y:string|number):string|number{
    if(typeof x=='string' && typeof y =='string'){
        return x+y
    }else if(typeof x=='number' && typeof y =='number'){
        return x+y
    }
}

console.log("字符串时",newARR('字符串','拼接'));
console.log("数字时",newARR(5,2));
