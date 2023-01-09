//Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /Freecodecamp/i; // "i" flag ignores case sensitive things from our string
let result = fccRegex.test(myString);
console.log(result);
