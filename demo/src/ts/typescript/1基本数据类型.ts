// 检查类型  类型声明 ts变量（参数，形参）的类型
let num:number =10
num=12
function abc(a:string){
    console.log(a);
}
abc('字符串')
// 1.基础类型
// 布尔类型 boolean
let flage:boolean=true
// 数字类型 number
let a:number=10  //十进制
let a1:number=0b1010 //二进制
let a2:number=0o16 //八进制
let a3:number=0xa45 //十六进制
// 字符串类型
let str:string='字符串'
// 2.undefined 和 null 类型  
let u:undefined=undefined
let n:null=null
// 可以作为其他类型的子类型
let b:string=null
let c:string=undefined