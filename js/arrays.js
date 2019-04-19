let hobbies = ['travel', 'games', 'music'];

function printHobbies(array) {
    console.log(`I like ${array.length} things`);
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        console.log('I like ' + element);
    }  
}

printHobbies(hobbies);