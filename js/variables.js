let x,y,z;

x = 10;
y = '10';
z = 30;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

var newX = x++;

console.log(`newX is ${typeof newX} ${newX}`);

console.log(`x == y is ${x == y}`)

let timeInMs = Date.now();
console.log(`timeInMs is ${timeInMs}`);
console.log(`years since epoch is ${timeInMs/1000/60/60/24/365}`);
console.log(`months since epoch is ${timeInMs/1000/60/60/24/365*12}`);
console.log(`days since epoch is ${timeInMs/1000/60/60/24}`);