// 可选参数 带？ x?:string, 可以不传值
// 默认参数带初值 ,m:string='默认值'
// b: 必选参数不能再可选参数后面
let getName=function(z:string,x?:string,m:string='默认值'):string{
    return z+x+m
}
console.log(getName('张',));
