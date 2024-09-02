interface Ifun{
    // (参数：类型，....):返回值类型
(a:string,b:string):boolean
}

// function ffun11(aq,b):{}

const fun2:Ifun=function(a:string,b:string):boolean{
    // return true
    // 在a里面找b   找到返回0，找不到返回-1
    console.log(a.search(b)); 
    // return a.search(b) !== -1
    return a.length>b.length
    // return 后面是判断语句，判断对就返回true 反之
}
console.log(fun2('123','10'));
