
function getSecondLargest(nums) {
    // Complete the function
    let a = Math.max(...nums);
    
    nums = nums.filter(n => a !== n);
    return Math.max(...nums);
}


function main() {
    const n = +(readLine());//5
    const nums = readLine().split(' ').map(Number);//[2,3,6,6,5] convert into 2 3 6 6 5
    
    console.log(getSecondLargest(nums));
}
