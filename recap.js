/*
// 1. let and const
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';
// 2. default 
// 5. spread or three dots (...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);
// 3. template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`
console.log(myNotes);

// 4. arrow function
// function square(x) {
//     return x * x;
// }
const square = x => x * x;
console.log(square(9));

/*
// Quiz 32, numbers 2
function min(nums) { return Math.min(nums) }
console.log(min([1, 3, 2])) //rs NaN

// Quiz 32, numbers 3
const cube = x => x * x * x;
console.log(cube(2))  // rs 8

// Quiz 32, numbers 4 
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b); // rs 3

// Quiz 32, numbers 6 
const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y); // rs undefined

// Quiz 32, numbers 7 
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output); //rs [ 1, 2, 3 ]  */

// Quiz 32, numbers 8
const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const five = friends.find(friend => friend.length == 5);
//console.log(five); // rs Misha

// Quiz 32, numbers 9
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product;
//console.log(price); // rs 49000

// Quiz 32, numbers 10 
const name = 'Adam Sandler';
const greeting = `Hello ${name}, welcome to the club`;
//console.log(greeting); //rs Hello Adam Sandler, welcome to the club

// Quiz 32, numbers 11 
const person=[ {singer:'Atif aslam', address:'23 something street'}]
const address =person[0].address;
//console.log(address); // rs 23 something street

// Quiz 32, numbers 12 
const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" },
 age: 38};
//console.log(player.firstName); // rs undefined

// Quiz 32, numbers 15 
const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
   ];
   const playersName = players.map(player => player.name.firstName);
   console.log(playersName);
   