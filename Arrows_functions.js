function modifyArray(nums) {
    return (nums || []).map(a => (a % 2 === 0 ? (a*2): (a*3)))
}


const n = [1,2,3,4,5];
console.log( n.join(" "))
console.log(modifyArray(n).join(" "));
