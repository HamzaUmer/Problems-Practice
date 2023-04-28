"""
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
"""

def threeSum(nums):
    result = []

    # Sort the input array to easily discard duplicates
    nums.sort()

    for i in range(len(nums) - 2):
        # Skip duplicates
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left = i + 1
        right = len(nums) - 1

        while left < right:
            sum = nums[i] + nums[left] + nums[right]

            if sum == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1

                # Skip duplicates
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif sum < 0:
                left += 1
            else:
                right -= 1

    return result

print(threeSum([-1,0,1,2,-1,-4])) # output: [[-1, -1, 2], [-1, 0, 1]]
print(threeSum([0,1,1])) # output: []
print(threeSum([0,0,0])) # output: [[0, 0, 0]]
