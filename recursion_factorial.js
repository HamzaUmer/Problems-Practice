function fact(num) {
    if(num == 0) {
        return 1;
    } else {
        return num * fact(num -1);
    }
}

let n = 0;
let result = fact(n);
console.log(result);