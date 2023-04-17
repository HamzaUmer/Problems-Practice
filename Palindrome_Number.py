"""
Given an integer x, return true if x is a palindrome, and false otherwise.
"""
def isPalindrome(x):
    # convert integer to string and split it into a list of characters
    digits = list(str(x))
     # reverse the list and join it back into a string
    reverse = ''.join(digits[::-1])
    
     # compare the original string with the reversed string
    return str(x) == reverse

print(isPalindrome(-101)) #output: false
print(isPalindrome(101)) #output: true
