// STRINGS IN JAVASCRIPT
let str = "my name is virat dogra"
console.log(str)  // my name is virat dogra
console.log(str[0]) // m  we cannot put negative value in []
console.log(str.length) // 22
console.log(str.at(4)) // a
console.log(str.at(-4)) // o
console.log(str.indexOf("virat")) // 11, it is does not find any index then it gives -1
console.log(str.includes("vir")) // true
console.log(str.slice(0,5)) // my na because it will not include last index
console.log(str.slice(5,0)) // it will not work
console.log(str.substring(5,0)) // my na
console.log(str.substring(2,5)) // my na

for(let ab of str){
    console.log(ab) // print entire string character by character
}

str[1]="i"
console.log(str) // my name is virat dogra it will not change because strings in js are immutable

if(str.indexOf("my")){
    console.log("hello") // do not print it because index of my is 0
}
if(str.indexOf("is")){ 
    console.log("hello")
}

let a = "hello hello hello"
console.log(a.indexOf("hello")) // 0
console.log(a.lastIndexOf("hello")) // 12
console.log(a.substr(2,5)) // llo h it starts from 0th index and prints 5 characters
console.log(a.replace("hello", "mohit")) // mohit hello hello
console.log(a.split(" ")) // [ 'hello', 'hello', 'hello' ]  space k around split kr dega 

let b ="    Hi     "
console.log(b.trim()) // Hi it will remove all spaces 
console.log(b.toLowerCase()) // hi 
console.log(b.toUpperCase()) // HI




// NUMBERS IN JAVASCRIPT
console.log(parseInt("42")) // 42
console.log(parseInt("42.1234")) // 42
console.log(parseInt("42pvhb")) // 42
console.log(parseInt("a42pvhb")) // NaN
console.log(parseInt(42.12)) // 42

console.log(parseFloat("42")) // 42
console.log(parseFloat("42.1234")) // 42.1234
console.log(parseFloat("42pvhb")) // 42
console.log(parseFloat("a42pvhb")) // NaN
console.log(parseFloat(42.12)) // 42.12




// ARRAYS IN JAVASCRIPT
const arr=[1,2,3,4]
console.log(arr.length) // 4 
arr.push("mangoes")
console.log(arr) // [ 1, 2, 3, 4, 'mangoes' ] add element at the end of array
arr.pop()
console.log(arr) // [ 1, 2, 3, 4 ] remove element from the end of array
arr.shift()
console.log(arr) // [ 2, 3, 4 ]  remove element from the start of array
arr.unshift(4)
console.log(arr) // [ 4, 2, 3, 4 ] add element at the start of array

const arrr=[5,5,6]
console.log(arr.concat(arrr)) // [4, 2, 3, 4, 5, 5, 6]
console.log(arr) // [ 4, 2, 3, 4 ] no change in original array 

arr[0]=3
console.log(arr) // [ 3, 2, 3, 4 ] arrays are not immutable

for(let items of arr){
    console.log(items) // 3 2 3 4 line by line
}

const arrrr=[1,2,3,4,5,6,7,8]
console.log(arrrr.push(11)) // 9 length of arrrr after pushing 11
console.log(arrrr.pop()) // 11 as it removes 11 from end of arrrr
console.log(arrrr.unshift(12)) // 9 length of arrrr after unshifting 12
console.log(arrrr.shift()) // as it removes 12 from front of arrrr

const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element)); // a b c line by line

const mohit=[1,2,3,4,5,6]
delete mohit[1]
console.log(mohit) // [ 1, <1 empty item>, 3, 4, 5, 6 ]
console.log(mohit.length) // 6 as length remains same

const nitin=[2,3,4,5,6]
console.log(nitin.splice(0,3)) // [ 2, 3, 4 ] as not include index = 3
console.log(nitin) // [5,6] 
console.log(nitin.length) // 2

let nitin1=[1,2,3,4]
console.log(nitin1.slice(0,3)) // [ 1, 2, 3 ]
console.log(nitin1) // [ 1, 2, 3, 4 ]
console.log(nitin1.includes(3)) // true
console.log(nitin1.indexOf(2)) // 1

let nitin2=[1,2,2,4,6,7,8]
console.log(nitin2.lastIndexOf(2)) // 2

let xy=[1,2,3,4,5,6,7,8]
let even=xy.find((item)=>item%2==0) // In arrow functions, if the function body consists of a single expression,
                                    // the return statement is implicit.
console.log(even) // 2

let even2=xy.filter(function(items){return items%2==0})       // also write function like this (item)=>item%2==0
console.log(even2) // [ 2, 4, 6, 8 ]

let xz=[1,2,3,4,5]
console.log(xz.map((x)=>x*2)) // [ 2, 4, 6, 8, 10 ]

let xx=[1,6,2,4,9,10]
xx.sort((a,b)=>a-b)
console.log(xx) // [ 1, 2, 4, 6, 9, 10 ]

let xx1=[1,4,2,6,8,1]
xx1.sort((a,b)=>b-a)
console.log(xx1) // [ 8, 6, 4, 2, 1, 1 ]




// CLASSES AND OBJECTS IN JS
class Animal{
    constructor(name,legs,color){
        this.name=name; 
        this.legs=legs;
        this.color=color;
    }
    speak(){
        console.log(this.name+ " bhow bhow")
    }
    static print(){
        console.log("hi i am animal")
    }
} 
const dog = new Animal("dog",4,"black")
console.log(dog) //  { name: 'dog', legs: 4, color: 'black' }
dog.speak()

// console.log(dog.speak())
Animal.print() // hi i am animal
// dog.print() // it will show error as static class methods are defined on the class itself




// DATES IN JS
const date = new Date()
console.log(date.getDate()) // todays date
console.log(date.getDay()) // todyas week day index
console.log(date.getMonth()) // index of todays month
console.log(date.getHours() ) // prseent hour
console.log(date.getMinutes()) // present minute
console.log(date.getSeconds()) // present second
console.log(date.getFullYear()) // present year
console.log(date.getYear()) // present year - 1900
console.log(date.getTime()) // returns the number of milliseconds since January 1, 1970 00:00:00.




// JSON IN JS
const obj= {  // object without function because function shows error while converting to json
    name:"john doe",
    age:23,
    city: "delhi",
}
const data=JSON.stringify(obj)
console.log(data) // {"name":"john doe","age":23,"city":"delhi"} string
const value= JSON.parse(data)
console.log(value) // { name: 'john doe', age: 23, city: 'delhi' } object




// MATHS IN JS
mathMethods(4.56);
function mathMethods(value) {
console.log(value); // 4.56
  
let rounded = Math.round(value);
console.log(rounded); // 5
  
let ceiling = Math.ceil(value);
console.log(ceiling); // 5
  
let flooring = Math.floor(value);
console.log(flooring); // 4
  
let randomValue = Math.random();
console.log(randomValue); // any random value
  
let maxValue = Math.max(5, 10, 15);
console.log(maxValue); // 15
  
let minValue = Math.min(5, 10, 15);
console.log(minValue); // 5
  
let powerOfTwo = Math.pow(value, 2);
console.log(powerOfTwo); // 20.793599999999998
  
let squareRoot = Math.sqrt(value);
console.log(squareRoot); // 2.1354156504062622
}





// OBJECTS IN JS
function objectMethods(obj) {
console.log(obj); // { key1: 'value1', key2: 'value2', key3: 'value3' }
  
let keys = Object.keys(obj);
console.log(keys); // [ 'key1', 'key2', 'key3' ]
  
let values = Object.values(obj);
console.log(values); // [ 'value1', 'value2', 'value3' ]
  
let entries = Object.entries(obj);
console.log(entries); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
  
let hasProp = obj.hasOwnProperty("key1");
console.log(hasProp); // true it checks whether an object has a property with a specified name as its own property,
                      // rather than inherited from its prototype chain.
  
let newObj = Object.assign( obj, { newProperty: "newValue" });
console.log(newObj); // {key1: 'value1', key2: 'value2', key3: 'value3', newProperty: 'newValue'}
}



const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};


objectMethods(sampleObject);




for(let key in sampleObject){
    console.log(sampleObject[key]) // value1 value2 value3
}



let sampleObject2=sampleObject // shallow copy pointing same object
console.log(sampleObject===sampleObject2) // true



let sampleObject3={
    name:"mohit"
}


let sampleObject4={
    name:"mohit"
}


console.log(sampleObject3===sampleObject4)  // false as it is deep copy



let sampleObject5={
    "my name is": "mohit",
    age:78
}


console.log(sampleObject5["my name is"]) // mohit
// console.log(sampleObject5.my name is) // shows error
console.log(sampleObject5) // { 'my name is': 'mohit', age: 78 }
delete sampleObject5.age
console.log(sampleObject5) // { 'my name is': 'mohit' }
sampleObject5["color"] = "brown"
console.log(sampleObject5) // { 'my name is': 'mohit', color: 'brown' }