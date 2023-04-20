/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is before the five we subtract it making four. T
he same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

function romanToInt(s) {
const values = {
I: 1,
IV: 4,
V: 5,
IX: 9,
X: 10,
XL: 40,
L: 50,
XC: 90,
C: 100,
CD: 400,
D: 500,
CM: 900,
M: 1000
};

let num = 0;
for (let i = 0; i < s.length; i++) {
if (i < s.length - 1 && values[s.substring(i, i + 2)]) {
num += values[s.substring(i, i + 2)];
i++;
} else {
num += values[s.charAt(i)];
}
}
return num;
}

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
