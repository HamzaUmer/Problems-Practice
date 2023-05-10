"""
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
"""

def threeSumClosest(nums, target):
    # sort the array
    nums.sort()

    # initialize variables for the result and the closest sum
    result = float('inf')
    closestSum = float('inf')

    # iterate through each number in the array
    for i in range(len(nums) - 2):
        # initialize pointers for the next two numbers
        left = i + 1
        right = len(nums) - 1

        # while the left pointer is less than the right pointer
        while left < right:
            # calculate the sum of the three numbers
            s = nums[i] + nums[left] + nums[right]

            # calculate the absolute difference between the sum and the target
            diff = abs(s - target)

            # if the difference is smaller than the current closest sum
            if diff < closestSum:
                # update the closest sum and the result
                closestSum = diff
                result = s

            # if the sum is smaller than the target, move the left pointer
            if s < target:
                left += 1
            # if the sum is larger than the target, move the right pointer
            else:
                right -= 1

    return result
    
print(threeSumClosest([-1,2,1,-4],1))# Output: 2, Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
print(threeSumClosest([0,0,0],1))# Output: 0, Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
