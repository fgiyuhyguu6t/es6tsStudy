// 给一组数据取别名
// 枚举成员会被赋值为从 0 开始递增的数字/
// 也可以手动赋值。。
// 后一个根据前一个递增  未手动赋值的枚举项会接着上一个枚举项递增
var Number1;
(function (Number1) {
    Number1[Number1["one"] = 0] = "one";
    Number1[Number1["two"] = 1] = "two";
    Number1[Number1["three"] = 4] = "three";
    Number1[Number1["four"] = 5] = "four";
})(Number1 || (Number1 = {}));
console.log(Number1);
// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
// 计算所得项后面不在添加未手动赋值的枚举项 。可添加赋值项
var mj;
(function (mj) {
    mj[mj["a"] = 0] = "a";
    mj[mj["b"] = 3] = "b";
    mj[mj["c"] = 'hello'.length] = "c";
    mj[mj["d"] = 7] = "d";
})(mj || (mj = {}));
console.log("常数枚举", 0 /* csmj.o */); //编译删了。可打印
console.log('外部枚举', Directions.Up); ////编译删了。不可打印
