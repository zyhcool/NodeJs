const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const multer = require('multer');

let app = express();

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Index</title>
</head>
<body>
    <form action="http://localhost:9090" method="post">
        <input name="username"><br>
        <input name="password"><br>
        <input type="submit">
    </form>
</body>
</html>
`
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).single('image'));

app.get("/", (req, res) => {
   // res.send(html);
   // res.send({ user: "zyh", haah: 89 });
   res.sendFile(__dirname + "/index.html");
})

app.post("/login", (req, res) => {
   console.log(req.body);
   res.send(`username: "${req.body.username}", password: "${req.body.password}"`);
   res.end("hello");
})

const uploadDir = "public";

app.post('/upload', function (req, res) {
   console.log(req.file);  // 上传的文件信息
   const file = req.file;
   try {
      setTimeout(() => {
         throw new Error("kkkkk");
      }, 110);
   } catch(e) {
      console.log(e)
   }
   var des_file = __dirname + `/${uploadDir}/` + file.originalname;
   fs.readFile(file.path, function (err, data) {
      fs.writeFile(des_file, data, function (err) {
         if (err) {
            console.log(err);
         } else {
            response = {
               message: 'File uploaded successfully',
               filename: file.originalname
            };
         }
         console.log(response);
         res.send(JSON.stringify(response))
         res.end(JSON.stringify(response));
      });
   });
})

let server = app.listen("8080", "localhost", function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log('running at http://' + host + ':' + port)
});



/*
  *@method 
*@for 
*@param{} 
*@return {} 
*/

/** 就
 * @method getUser
 * @for Class
 * @param {number} num 金额
 * @return {string} 字符串化
*/

function add(en){

}