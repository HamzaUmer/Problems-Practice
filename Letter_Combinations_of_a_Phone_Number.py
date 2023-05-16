"""
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
"""

def letter_combinations(digits):
    if len(digits) == 0:
        return []

    digit_to_letters = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    combinations = []

    def backtrack(current_combination, next_digits):
        if len(next_digits) == 0:
            combinations.append(current_combination)
            return

        current_digit = next_digits[0]
        letters = digit_to_letters[current_digit]
        for letter in letters:
            backtrack(current_combination + letter, next_digits[1:])

    backtrack("", digits)
    return combinations


# Example usage:
print(letter_combinations("23"))  # Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
print(letter_combinations("79"))  # Output: ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"]
