/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
*/

function isMatch(s, p) {
  const m = s.length, n = p.length; // Store the lengths of s and p in variables m and n, respectively.
  const dp = Array(m+1).fill().map(() => Array(n+1).fill(false)); // Create a 2D array dp of size (m+1)x(n+1) and initialize it with false.
  dp[0][0] = true; // Set dp[0][0] to true, since an empty string matches an empty pattern.

  for (let j = 1; j <= n; j++) {
    if (p[j-1] === '*') dp[0][j] = dp[0][j-2]; // Fill in the first row of dp based on the pattern p. If p[j-1] is '*', then dp[0][j] is true if and only if dp[0][j-2] is true (i.e., skip over the '*' and its preceding element).
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) { // Loop through the rows and columns of dp, starting from the second row and column.
      if (p[j-1] === '.' || p[j-1] === s[i-1]) { // If p[j-1] is a regular character or '.', then s[i-1] and p[j-1] must match, and dp[i][j] is true if and only if dp[i-1][j-1] is true.
        dp[i][j] = dp[i-1][j-1];
      } else if (p[j-1] === '*') { // If p[j-1] is '*', then there are two cases:
        dp[i][j] = dp[i][j-2] || (s[i-1] === p[j-2] || p[j-2] === '.') && dp[i-1][j]; // Case 1: The '*' matches zero of the preceding element, in which case dp[i][j] is true if and only if dp[i][j-2] is true (i.e., skip over the '*' and its preceding element). Case 2: The '*' matches one or more of the preceding element, in which case s[i-1] and p[j-2] must match, and dp[i][j] is true if and only if dp[i-1][j] is true.
      }
    }
  }

  return dp[m][n]; // Return the final value of dp[m][n], which indicates whether the entire string s matches the entire pattern p.
}
console.log(isMatch("aa","a"))//Output: false
console.log(isMatch("aa","a*"))//Output: true
