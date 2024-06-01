// Datatypes
// Primitive

// 7 types : String , Number , Boolean , NULL , Undefined , Symbol(use a value as unique) , Bigint(Scientific Value) 

const score =  100
const scoreValue = 100.3

const isLoggedIn = false

const outsidetemp =  null

let userEmail;  // undefined


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 45465465465465465n //use n for present bigint
// Reference / Non primitive

// 3 basic type : Array , Object , Function

const heroes = ["Shubh" , "Indu" ,"Golu"]

let myObject ={
    name: "Shubham" ,
    age: 22
}

const myFunction = function()
{
    console.log("Hello lulllu");
}

console.log(typeof bigNumber);  //bigint 
console.log(typeof myObject);   //object
console.log(typeof myFunction); //function  //object
console.log(typeof heroes);     //object

// Javascript is dynamically type language

// Stack and Heap Memory

// Stack used in Primitive data types
// Heap used in non-primitive or object 

