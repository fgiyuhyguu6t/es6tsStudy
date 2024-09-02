const fs =require("fs")

    function readwx(){
        fs.readFile('./wxwx.md',(err,data)=>{
            return new Promise((resolve,reject)=>{
                if(err) reject(err)
                resolve(data)
        })
    })
}

function readwxlblb(){
    fs.readFile('./wxwxlb.md',(err,data)=>{
        return new Promise((resolve,reject)=>{
            if(err) reject(err)
            resolve(data)
    })
})
}

async function mm(){
    let wx1=await readwx()
    let wx2=await readwxlblb()
    console.log(wx1);
    console.log(wx2);
}
mm()
export{readwx ,readwxlblb,mm}