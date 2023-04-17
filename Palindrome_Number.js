/* 
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

function isPalindrome(x) {
  // convert integer to string and split it into an array
  const digits = String(x).split('');

  // reverse the array and join it back into a string
  const reversed = digits.reverse().join('');

  // compare the original string with the reversed string
  return String(x) === reversed;
}

console.log(isPalindrome(101))//Output: true
console.log(isPalindrome(21))//Output: false
