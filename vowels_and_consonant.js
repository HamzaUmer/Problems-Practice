'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
const vowel = ["a","e","i","o","u"];
function vowelsAndConsonants(s) {
    let {vowels, consonants} = (s.split('') || []).reduce(
        (target,item) => {
            target[vowel.includes(item)? "vowels": "consonants"].push(item);
            return target;
        },
        {vowels: [], consonants: []}
    )
    
    vowels.concat(consonants).forEach(item => 
    console.log(item)
    )
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
