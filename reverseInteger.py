"""
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside 
the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
"""

def reverse(x: int) -> int:
    reversed_num = int(str(abs(x))[::-1]) * (-1 if x < 0 else 1)
    if reversed_num < -2**31 or reversed_num > 2**31 - 1:
        return 0
    return reversed_num

print(reverse(-120))#output: -21
