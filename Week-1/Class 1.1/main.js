// VARIABLES IN JS
let a= 10 
a=20
console.log(a) // 20



var b=10;
console.log(b) // 10

const c= 10
console.log(c) // 10
// c= 30
// console.log(c) // throws error 



 
// ARRAYS IN JS
let arr=["virat", 20, "male"]
console.log(arr) // [ 'virat', 20, 'male' ]
console.log(arr[1]) // 20




// OBJECTS IN JS
let obj={
 name:"virat",
 age: 23,
 color: "red"
}
console.log(obj) //{ name: 'virat', age: 23, color: 'red' }
console.log(obj.name) // virat
console.log(obj["name"]) // virat




// ARRAYS OF OBJECTS
 let obj1=[{name:"virat",
 age: 23,
 color: "red"},
{
    name:"mohit",
    age: 23,
    color: "blue"
}]
console.log(obj1) // [ { name: 'virat', age: 23, color: 'red' },{ name: 'mohit', age: 23, color: 'blue' }]




// LOOPS IN JS
let name1=["virat","mohit","nitin"]
let age=[14,15,16]
for(i=0;i<name1.length;i++){
    if(age[i]>15){
        console.log(name1[i]) // nitin
    }
}




// OPERATORS IN JS
console.log("chilii" > "potato") // false
console.log("chili" > "Chili") // true
console.log("chili" >= "chili") // true
console.log("chili" > "chilipanner") // false as lenght matters
console.log("chili" > "chila") // true
console.log("virat"+"dogra") // viratdogra
console.log("virat"+"dogra"+10) // viratdogra10
console.log(10+12+"virat") // 22virat
console.log("virat"+10) // virat10
console.log("virat"+10+2) // virat102
console.log(10+12+"virat"+12+(10+2)) // 22virat1212
console.log("virat"*2) // NaN
console.log("virat"/2) // NaN
console.log("4"/2) // 2
console.log("4"*2) // 8
console.log("2"==2) // true as it is regular equality check
console.log("2"===2) // false as it is strict equality check
console.log("2"==-2) // false

let counter1=1


counter1++
console.log(counter1) // 2

let counter2= 1
++counter2
console.log(counter2) // 2

let counter3= 1
let counter4=1
console.log(counter3++) // 1
console.log(counter3++) // 2
console.log(++counter4) // 2
console.log("5"+4) // 54
console.log(5+"4") // 54
console.log(5+4) // 9
console.log("5" + "4") // 54
console.log("5" + + 4) // 54 as second plus convert 4 to string
console.log(5 + + "4") // 9 as second plus convert 4 to integer
console.log(5 + + 4) // 9
console.log("5" + + "4") // 54

console.log("5" - 4) // 1
console.log(5 - "4") // 1
console.log(5 - 4) // 1
console.log("5" -"4") // 1
console.log("5" + - 4) //5-4 as - convert 4 to string
console.log(5 + - "4") // 1 as - convert 4 to integer
console.log(5 + - 4) // 1
console.log("5" + - "4") // 5-4

console.log("5" - - 4) // 9
console.log("5" - - 4) // 9
console.log(5 - - 4) // 9
console.log("5" - - "4") // 9

console.log("5"*4) // 20
console.log(5*"4") // 20
console.log (5*4) // 20
console.log("5"*"4") // 20
console.log("5"**4) // 625
console.log(5**"4") // 625
console.log (5**4) // 625
console.log("5"**"4") // 625

console.log([2,2]==[2,2]) // false 
console.log({}=={}) // false

// because arrays and objects are compared by their refernces not by their values so they are distinct in memory 

const objec={
      name:"virat"
}
const objec2={
    name:"virat"
}
console.log(objec.name==objec2.name) // true as we are comparing values

const m=["mohit",2,{name:"virat",color:"red"}]
const j=["rohit",1,{name:"virat", color:"red"}]
console.log(m[2].name==j[2].name) // true
console.log(m[2]==j[2]) // false these are objects