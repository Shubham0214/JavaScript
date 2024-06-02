const score = 400

console.log(score);
const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 123.8966

//Number of significant digits. Must be in the range 1 - 21, inclusive.
console.log(otherNumber.toPrecision(3));

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));



//  *****************   MATHS  ***********************

//libraries come with default 

console.log(Math.abs(-4));
console.log(Math.round(4.8));

console.log(Math.ceil(4.2));
console.log(Math.sqrt(56));

//number between 0-1
console.log(Math.random());

const min = 10

const max = 20

console.log(Math.random() * (max - min + 1))