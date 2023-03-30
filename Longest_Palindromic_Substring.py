# Given a string s, return the longest palindromic substring in s.
def longest_palindrome(s):
    longest = ""
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            substr = s[i:j]
            if substr == substr[::-1] and len(substr) > len(longest):
                longest = substr
    return longest

print(longest_palindrome("babad")) # "bab" or "aba"
print(longest_palindrome("cbbd")) # "bb"
