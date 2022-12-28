//Question: Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.  
function sum(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }
    return sum;
  }
console.log(sum([2,3,4,5], 3))
