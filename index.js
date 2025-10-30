// http server

const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req , res)  => {
    // console.log("new recording started");

    // console.log(req, Headers);

    const log = `${Date.now()}: New req received\n`
    fs.appendFile("log.txt", log, (err, data) => {
      res.end("Hello, i am here");
});
 
});

  

myServer.listen(1000, () => console.log("it is started"))


// go to the localhost:1000 and refresh it ...check the terminal,  the headers will there