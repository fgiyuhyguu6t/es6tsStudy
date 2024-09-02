// object 表示非原始类型 除了 number string boolean 之外的类型
let obj = {};
// 以下三个通过字面量赋值 报错 
// obj=123
// obj='字符串'
// obj=true
obj = null;
obj = undefined;
obj = [];
obj = new String(); // new一个实例对象
obj = String;
