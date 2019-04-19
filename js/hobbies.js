const hobbies = [
    { name: 'travel', lengthInYearsAtHobby: 15 },
    { name: 'cooking', lengthInYearsAtHobby: 10},
    { name: 'games', lengthInYearsAtHobby: 25}
];

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
}

for (let hobby of hobbies) {
    printHobbyInfo(hobby);
}

let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

let band2 = new Object();
band2.name = "Three 6 Mafia";
band2.city = "Memphis";
band2.country = "USA";
band2.yearFormed = 1991;
band2.genres = new Array("Rap", "Hip Hop", "Country Rap Tunes");

let bandsList = new Array(band1, band2);

function printBand(band) {
    console.log(`Name: ${band.name}`);
    console.log(`City: ${band.city}`);
    console.log(`Country: ${band.country}`);
    console.log(`Year Formed: ${band.yearFormed}`);
    console.log(`Genres: ${band.genres}`);
    console.log(``);
}

for(let band of bandsList) {
    printBand(band)
}

hobbies.forEach(hobby => {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `);
});