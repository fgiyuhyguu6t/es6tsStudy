// interface Iarr{
//     <T>(value:T,count:number):Array<T>
//     // <T>(value:T,count:number):T[]
// }
let getArr1 = function getArr1(vale, count) {
    const arr11 = [];
    for (let i = 0; i < count; i++) {
        arr11.push(vale);
    }
    return arr11;
};
console.log(getArr1('hkshk', 5));
let ppp = {
    name: ''
};
let pppn = {
    name: 123
};
