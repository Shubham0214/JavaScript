const name="Shubh"

const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Shubh')

// ******STRING METHOD********
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,2)  // ignore negative value

console.log(newString);

const anotherString =gameName.slice(-8,4)

console.log(anotherString);

const newStringOne = "   Shubh   "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Shubham.com/luulluuLove"

console.log(url.replace('Love' , 'indu'))

console.log(gameName.split('-'))