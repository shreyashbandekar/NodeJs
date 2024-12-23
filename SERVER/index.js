const http = require('http');
const fs = require('fs');
const url = require('url');


const myServer = http.createServer((req, res) => {
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
            case "/signup" :
                if(req.method === "GET") res.end("Sign Up Page");
                else
                if(req.method === "POST"){
                    //DB Query
                    res.end("success");
                }
            default:
                res.end("404 Not Found");
        }
        // res.end("Hello From server");
    });


    // console.log(req.headers);
    // console.log(req);

});

myServer.listen(8000, () => console.log("Server Started"));