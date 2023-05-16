/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

const letterCombinations = (digits) => {
  if (digits.length === 0) return [];

  const digitToLetters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const combinations = [];

  const backtrack = (currentCombination, nextDigits) => {
    if (nextDigits.length === 0) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = nextDigits[0];
    const letters = digitToLetters[currentDigit];
    for (const letter of letters) {
      backtrack(currentCombination + letter, nextDigits.slice(1));
    }
  };

  backtrack("", digits);
  return combinations;
};

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("79")); // Output: ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"]
