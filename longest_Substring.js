const lengthOfLongestSubstring = (s) => {
    //Sliding Window concept from DSA
    if(!s) {
        return 0;
    }
    
    let endPointer = 0;
    let startPointer = 0;
    let maxLength = 0;
    //Set for unique characters
    let uniqueChar = new Set();
    
    //Loop on Strings from "s"
    while(endPointer < s.length){
        if(!uniqueChar.has(s[endPointer])){
            uniqueChar.add(s[endPointer]);
            endPointer++;
            maxLength = Math.max(maxLength, uniqueChar.size)
            
        }
        else {
            uniqueChar.delete(s[startPointer]);
            startPointer++;
        }
    }
    return maxLength;
}

const s ="abcabcbb";
console.log("s =", s)
console.log(lengthOfLongestSubstring(s))
