const fs = require("fs");

// ASYNCHRONOUS FUNCTIONS IN JS
function print(a,b,sum){
    return  sum(a,b)
   
}
function sum(a,b){
    return a+b
}

function hello(){
    console.log(print(10,20,sum))
}
setTimeout(hello,5000) // it will take time to execute so we delegate this task and move to next one 

console.log("hi") // first hi will print and then 30 will print as setTimeout is async function




// FS READFILE FUNCTION
 fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
 })

 function mohit(){
    let a=10;
    for(i=0;i<100000000;i++) a++
    return a
 }

 console.log(mohit())  
 
 console.log("hy") // firstly output of mohit get print then hy will print and then data of a.txt will print   (syncronise function)





 