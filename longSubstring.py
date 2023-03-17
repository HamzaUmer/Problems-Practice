def lengthOfLongestSubstring(s):
    if not s:
        return 0
    
    endPointer = 0
    startPointer = 0
    maxLength = 0
    uniqueChar = set()
        
    while endPointer < len(s):
        if s[endPointer] not in uniqueChar:
            uniqueChar.add(s[endPointer])
            endPointer += 1
            maxLength = max(maxLength, len(uniqueChar))
        else:
            uniqueChar.remove(s[startPointer])
            startPointer += 1
    
    return maxLength

s = "xyqjkadj"
print("s =", s)
print(lengthOfLongestSubstring(s))
