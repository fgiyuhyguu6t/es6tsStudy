//any 任何类型
let h:any=123
h=true
h=[]
h={}
let newArr:any[]=[1,2,'hello',true]
// split 字符串切割
console.log(newArr[2].split('l'));  //2可以其他不行
console.log(newArr[1].split('l'));