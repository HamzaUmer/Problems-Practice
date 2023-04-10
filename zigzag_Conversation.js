/**Zigzag Conversation:
The string "PAYPALISHIRING" is written in a 
zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
**/

function convertToZigZag(s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill('');
  let currRow = 0;
  let direction = -1;

  for (const char of s) {
    rows[currRow] += char;
    if (currRow === 0 || currRow === numRows - 1) direction *= -1;
    currRow += direction;
  }

  return rows.join('');
}
const s = "PAYPALISHIRING";
const numRows = 3;

const zigzag = convertToZigZag(s, numRows);
console.log(zigzag); // "PAHNAPLSIIGYIR"
