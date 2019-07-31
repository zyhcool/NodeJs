const http = require("http");
const querystring = require("querystring");

http.createServer((request, response) => {

    response.writeHead(200, {
        "Content-type": "text/plain",
        "Access-Control-Allow-Origin": "*",
    })

    let data;
    request.on("data", (chunk) => {
        console.log(chunk);
        data += chunk;
    })

    request.on("end", () => {
        let userdata = querystring.parse(data);
        console.log(typeof userdata);
        console.log(userdata);
        response.end();
    })


}).listen("9090");

console.log("the http server start at port 9090");


// http.createServer(function (req, res) {
//     var body = "";
//     res.writeHead(200, {
//         "Content-type": "text/plain",
//         "Access-Control-Allow-Origin": "*",
//     })
//     req.on('data', function (chunk) {
//         body += chunk;
//         console.log(chunk);
//     });
//     req.on('end', function () {
//         // 解析参数
//         body = querystring.parse(body);
//         console.log(body);
//         res.end();
//     });
// }).listen(9090);
