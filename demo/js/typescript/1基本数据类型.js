// 检查类型  类型声明 ts变量（参数，形参）的类型
let num = 10;
num = 12;
function abc(a) {
    console.log(a);
}
abc('字符串');
// 1.基础类型
// 布尔类型 boolean
let flage = true;
// 数字类型 number
let a = 10; //十进制
let a1 = 0b1010; //二进制
let a2 = 0o16; //八进制
let a3 = 0xa45; //十六进制
// 字符串类型
let str = '字符串';
// 2.undefined 和 null 类型  
let u = undefined;
let n = null;
// 可以作为其他类型的子类型
let b = null;
let c = undefined;
