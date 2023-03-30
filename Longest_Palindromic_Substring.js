/**Given a string s, return the longest palindromic substring in s. **/

function longestPalindrome(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substr = s.substring(i, j);
      if (substr === substr.split("").reverse().join("") && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
