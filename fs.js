const fs = require("fs");
const quote = "no beauty shines brighter than that of good heart";
// fs.writeFile("./awesome.html",quote,(err) =>{
//     console.log(err);
//     console.log("completed writeFile")
// })

const quote1 = "live more worry less";

// for (let i = 0; i <=10; i++) {
// fs.writeFile( `./text-${i}.html`,quote1,(err)=>{
//     //console.log(err);
//     console.log(`completed writeFile task-${i}.html`)
// })

// }

// const [, ,files]  = process.argv;
// for (let i = 0; i <=files; i++) {
//     fs.writeFile( `./text-${i}.html`,quote1,(err)=>{
//         //console.log(err);
//         console.log(`completed writeFile task-${i}.html`)
//     })
    
//     }
    
// fs.readFile("./cool.txt", "utf8", (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// fs.appendFile("./cool.txt","\n" + "this is appendded line",(err)=>{
//     console.log("completed updating");
// })

fs.unlink("css.txt",(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("completed deleting");
    }
})