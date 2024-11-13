const { error } = require("console");
const fs = require("fs");
const os =require('os');
// Sync Blocking
// fs.writeFileSync('./test.txt','Hey There! I am JS Developer')

// Async Non-Blocking
// fs.writeFile('./test.txt','Hey There! I am JS Developer Async',(err) => {});

// const result =fs.readFileSync('./contacts.txt',"utf-8" );
// console.log(result);

// fs.readFile("./contacts.txt","utf-8",(err,result) => {
//     if (err){
//         console.log("Error",err);
//     }else{
//     console.log(result);
//     }
// });

// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());
// fs.appendFileSync('./test.txt', `${Date.now()} Hey There\n`);
// fs.cpSync('./test.txt','./copy.txt');
// Delete File
// fs.unlinkSync('./copy.txt');
// console.log(fs.statSync('./test.txt'));

// Blocking....
// const result =fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);


// console.log("1");
// Non-Blocking.....
// fs.readFile("./contacts.txt","utf-8",(err,result) => {
//     if (err){
//         console.log("Error",err);
//     }else{
//     console.log(result);
//     }
// });
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");


console.log(os.cpus().length);