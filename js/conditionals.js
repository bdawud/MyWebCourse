let numOne = 1;
let stringOne = '1';

console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);

const day = new Date().getDay();

if(day == 'Monday') {
    console.log('Back to work!');
}
else if (day == 'Wedneday') {
    console.log('Over the hump!'); 
}
else if (day == 'Saturday' || day == 'Sunday' ) {
    console.log('It is the weekend!'); 
}
else {
    console.log('It is a weekday'); 
}