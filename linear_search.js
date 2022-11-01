function linearSearch(arr,target) {
    for(let i in arr) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

let result = linearSearch([1,2,3,4], 3);
console.log(result);