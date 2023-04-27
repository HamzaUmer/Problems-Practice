"""
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
"""

def longestCommonPrefix(strs):
    if len(strs) == 0:
        return ""
    prefix = strs[0]
    for i in range(1, len(strs)):
        while strs[i].find(prefix) != 0:
            prefix = prefix[:-1]
            if len(prefix) == 0:
                return ""
    return prefix

print(longestCommonPrefix(["flower", "flow", "flight"])) #output: "fl"
print(longestCommonPrefix(["dog", "racecar", "car"])) #output: ""
