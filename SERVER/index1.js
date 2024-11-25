// const http = require('http');
// const fs = require('fs');
// const url = require('url');
const express = require("express");

const app = express();

// @ts-ignore
app.get("/", (req, res) =>{
    return res.send("Hello from Home page");
});
// @ts-ignore
app.get("/about", (req, res) =>{
    return res.send("Hello from about page");
});
function myHandler(res, req) {
    if (req.url === './favicon.ico') return res.end('')
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
    // @ts-ignore
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {

        switch (myUrl.pathname) {
            case '/':
                if (req.method === "GET")
                    res.end("Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi,${username}`);
                // res.end("I am Shreyash Bandekar");
                break;
            case "/signup":
                if (req.method === "GET") res.end("Sign Up Page");
                else
                    if (req.method === "POST") {
                        //DB Query
                        res.end("success");
                    }
                break;
            default:
                res.end("404 Not Found");
        }
        // res.end("Hello From server");
    });


    // console.log(req.headers);
    // console.log(req);
}

app.listen(8000, () => console.log("Server Started"));

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started"));