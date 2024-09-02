// 给一组数据取别名
// 枚举成员会被赋值为从 0 开始递增的数字/
// 也可以手动赋值。。
// 后一个根据前一个递增  未手动赋值的枚举项会接着上一个枚举项递增
  
// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
// 计算所得项后面不在添加未手动赋值的枚举项 。可添加赋值项
enum mj{
    a,
    b=3,
    c='hello'.length,
    d=7
}
// 常数枚举是使用 const enum 定义的枚举类型：
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
const enum csmj{
    o,
    b,
    u=10+10,
    // f='hello'.length  //不能包含计算所得项
}
console.log("常数枚举",csmj.o);  //编译删了。可打印
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
// 外部枚举与声明语句一样，常出现在声明文件中
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
console.log('外部枚举',Directions.Up);  ////编译删了。不可打印
// 同时使用 declare 和 const 也是可以的
declare const enum Directions2 {
    Up,
    Down,
    Left,
    Right
}