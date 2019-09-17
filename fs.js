// const fs = require("fs");

// fs.open("server.js", "r+", (err, fd) => {
//     console.log(err, fd);
// })

// fs.mkdir("./haha.js", (err) => {
//     if (err) {
//         console.log(err)
//     }
// });

// fs.stat("server.js",(err)=>{
//     console.log(err);
// })

async function x() {
    await y();
}
async function y() {
    await x();
}
x().then((value)=>{
    console.log(value)
}).catch((e)=>{
    console.log("&&&&&&&&&&",e)
})