// 剩余参数 ...args  可以定义类型 :number[] ...args:string[]
// function fn(x:string,y:string,...args:number[]){
function fn(x, y, ...args) {
    return x + y + args;
}
console.log(fn('', '', 1245));
console.log(fn('zfc', 'zfcccc', 'hj'));
function newARR(x, y) {
    if (typeof x == 'string' && typeof y == 'string') {
        return x + y;
    }
    else if (typeof x == 'number' && typeof y == 'number') {
        return x + y;
    }
}
console.log("字符串时", newARR('字符串', '拼接'));
console.log("数字时", newARR(5, 2));
