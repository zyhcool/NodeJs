const fs = require("fs");

const data = fs.readFileSync("readme.txt");

console.log("同步读取：", data.toString());

fs.readFile("readme.txt", (err, data) => {
    if (err) {
        throw err;
    }
    console.log("异步读取：", data.toString());
})
console.log("--------");

// fs.unlinkSync("./ff.js"); // 删除文件
// fs.rmdir("haha"); // 删除目录

fs.stat("hello.js", (error, stats) => {
    console.log(stats.isFile());
})