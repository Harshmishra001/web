const fs=require("fs")

// CALLBACK HELL IN JS
function myOwnSetTimeout(fn,duration){
  setTimeout(fn,duration)
}

myOwnSetTimeout(function(){
    console.log("hi there") // hi there
},2000)
// myOwnSetTimeout is async function which we make of our own that wrap another async function but myOwnSetTimeout 
// will not go to web api but setTimeout will go to web api.




// PROMISES IN JS
// Promises are inbuilt class in js that don't accept callback as an arguement and return a promise
function promisedMyFunction(duration){

    const p=new Promise(function(resolve){
        setTimeout(resolve,duration)
    })

    return p;
}

let ans=promisedMyFunction(2000)
console.log(ans) // Promise { <pending> }

ans.then(function(){
    console.log("hi there 2") // hi there 2
})




// ASYNC AWAIT IN JS
function promisedMyFunction2(){
    const p=new Promise(function(resolve){
        resolve("hi there 3")
    })
    return p;
}
async function abc(){
    let a= promisedMyFunction2()
    console.log(a) // Promise { 'hi there 3' }
    let b = await promisedMyFunction2()
    console.log(b) // hi there 3
}

abc()




// FS READFILE FUNCTION USING CALLBACK
fs.readFile("a.txt","utf-8",function(err,data){
   console.log(data) // hi there how are you
})




// FS READFILE FUNCTION USING PROMISES
const a=fs.promises.readFile("a.txt","utf-8")
console.log(a) // Promise { <pending> }
a.then(function(data){
    console.log(data) // hi there how are you
})




// FS READFILE FUNCTION USING ASYNC AWAIT
async function def(){
    let a=fs.promises.readFile("a.txt","utf-8")
    console.log(a) // Promise { <pending> }
    let b= await fs.promises.readFile("a.txt","utf-8")
    console.log(b) // hi there how are you
}
def()