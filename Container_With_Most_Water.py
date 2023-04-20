"""
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
"""

def maxArea(h):
    maxArea = 0
    left = 0
    right = len(h) - 1
    
    while left < right :
        area = min(h[left], h[right] ) * (right - left)
        maxArea = max(area, maxArea)
        
        if h[left] < h[right]: 
            left += 1
        else :
            right -= 1
    return maxArea

print(maxArea([1,8,6,2,5,4,8,3,7])) #Output: 49
