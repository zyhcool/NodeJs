const http = require("http");

http.createServer((request, response) => {
    console.log(request);

    response.writeHead(200, {
        "Content-type": "text/plain"
    })

    response.end("Hello World!");
}).listen("9090");

console.log("the http server start at port 9090");