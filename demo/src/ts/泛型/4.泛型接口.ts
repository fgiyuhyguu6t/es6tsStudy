// interface Iarr{
//     <T>(value:T,count:number):Array<T>
//     // <T>(value:T,count:number):T[]
// }

interface Iarr<T>{
    (value:T,count:number):Array<T>
    // <T>(value:T,count:number):T[]
}

let getArr1:Iarr<String>=function getArr1<T>(vale:T,count:number):T[]{
    const arr11:T[]=[]
    for(let i=0;i<count;i++){
        arr11.push(vale)
    }
    return arr11
}

console.log(getArr1('hkshk',5));


interface perrr<T>{
    name:T
}
let ppp:perrr<string>={
    name:''
}
let pppn:perrr<number>={
    name:123
}