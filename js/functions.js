function displayName(name) {
    console.log('Hello, ' + name)
}

function fToC(deg) {
    console.log(`${deg} F is ${(deg - 32) * 5/9} C`);
}

function cToF(deg) {
    console.log(`${deg} C is ${(deg * 9/5) + 32} F`);
}

displayName("Brandon");
fToC(212);
cToF(60);