// FUNCTIONS IS JS
// FUNCTION DECLARATION
let ans=add(1,2)  // it will work fine
function add(a,b){
    return a+b
}
// let ans=add(1,2)
console.log(ans) // 3
console.log(add(1,2)) // 3





// FUNCTION EXPRESSION
// let a=add2num(1,2) it shows error because in this function is executed after its definition
let add2num = function(c,d){
    return c+d
}
let a=add2num(1,2)
console.log(a) // 3
console.log(add2num(1,2)) // 3




// ARROW FUNCTION
let sub =(a,b) => {
       return b-a
}
console.log(sub(2,4)) // 2




// CALLBACK FUNCTIONS
function print(a,b,sum1){
    return sum1(a,b)
}
function sum1(a,b){
    return a+b
}
console.log(print(10,20,sum1)) // 30 plus is callback function




// ANONYMOUS FUNCTION
function print1(a,b,sum1){
    return sum1(a,b)
}
console.log(print1(10,20,function (a,b){
    return a+b
})) // 30 this is a anonymous function having no name




// SET TIME OUT FUNCTION
function virat(){
    console.log("virat is a good boy") 
}
setTimeout(virat,5000)




// SET INTERVAL FUNCTION
function mohit(){
    console.log("mohit is a good boy") 
}
setInterval(mohit,5000)




// SCOPE OF FUNCTION 

if(true){
    let a1=10
    const b1=90
    var c1= 23
    console.log(a1) // 10
    console.log(b1) // 90 
    console.log(c1) // 23
}
console.log(a1) // shows error   coz // let and const are block level 
console.log(b1) // shows error
console.log(c1) // 23

