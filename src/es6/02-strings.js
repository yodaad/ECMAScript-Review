// Before ES6
let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world + "!";
//console.log(epicPhrase);

// After ES6

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-line strings before ES6
let lorem = "This is a string \n " + "this is another string";

// Multi-line strings after ES6
let lorem2 = `This is another phrase
 this is the continuation of the phrase.
`;

console.log(lorem);
console.log(lorem2);
