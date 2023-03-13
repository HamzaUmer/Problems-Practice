function reverseString(word) {
    let s = "";
    for(let i = word.length -1; i >= 0; i--){
        s += word[i];
    }
    return s;
}

console.log(reverseString("Bunny"));
