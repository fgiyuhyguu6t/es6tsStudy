const fs = require("fs")

const p=new Promise((resolve,reject)=>{
    fs.readFile("./wenxue.md",(err,data)=>{
        resolve(data)
        // reject("kkk")
    })
})
p.then(v=>{
    console.log(v);
},c=>{
    console.log("错");
})

// p.then(v=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./wenxue2.md',(err,data)=>{
//             resolve([v,data])
//         })
//     })
// }).then(v3=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile("./wx3.md",(err,data)=>{
//             resolve([v3,data])
//         })
//     })
// }).then(ss=>{
//     console.log(ss);
// })