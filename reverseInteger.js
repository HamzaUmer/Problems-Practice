/** Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside 
the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
**/

function reverse(x) {
  let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversed;
}

console.log(reverse(123))//Output: 321
