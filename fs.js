const fs = require("fs");

fs.open("server.js", "r+", (err, fd) => {
    console.log(err, fd);
})

fs.mkdir("./haha.js", (err) => {
    if (err) {
        console.log(err)
    }
});

fs.stat("server.js",(err)=>{
    console.log(err);
})