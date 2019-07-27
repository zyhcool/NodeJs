const fs = require("fs");
const zlib = require("zlib");


// // 读取流
// let readerStream = fs.createReadStream("readme.txt");
// let data = "";

// readerStream.on("data",(chunk)=>{
//     console.log(chunk);
//     data += chunk;
// })

// readerStream.on("end",()=>{
//     console.log("end",data);
// })

// readerStream.on("error",(error)=>{
//     console.log(error.stack);
// })



// // 写入流

// let writeStream = fs.createWriteStream("readme.txt");

// writeStream.write("1212212","utf-8");

// writeStream.end();

// writeStream.on("finish",(data)=>{
//     console.log("写入成功");
// })

// writeStream.on("error",(error)=>{
//     console.log(error);
// })


// // 管道流

// let readerStream = fs.createReadStream("readme.txt");
// const writeStream = fs.createWriteStream("writeme.txt");

// readerStream.pipe(writeStream);


// 链式流

// fs.createReadStream("readme.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("readme.haha"));

fs.createReadStream("readme.haha").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("readmeme.txt"));