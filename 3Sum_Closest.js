/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
*/

function threeSumClosest(nums, target) {
    // sort the array
    nums.sort((a, b) => a - b);
    
    // initialize variables for the result and the closest sum
    let result = Infinity;
    let closestSum = Infinity;
    
    // iterate through each number in the array
    for (let i = 0; i < nums.length - 2; i++) {
        // initialize pointers for the next two numbers
        let left = i + 1;
        let right = nums.length - 1;
        
        // while the left pointer is less than the right pointer
        while (left < right) {
            // calculate the sum of the three numbers
            const sum = nums[i] + nums[left] + nums[right];
            
            // calculate the absolute difference between the sum and the target
            const diff = Math.abs(sum - target);
            
            // if the difference is smaller than the current closest sum
            if (diff < closestSum) {
                // update the closest sum and the result
                closestSum = diff;
                result = sum;
            }
            
            // if the sum is smaller than the target, move the left pointer
            if (sum < target) {
                left++;
            }
            // if the sum is larger than the target, move the right pointer
            else {
                right--;
            }
        }
    }
    
    return result;
}

console.log(threeSumClosest([-1,2,1,-4],1))// Output: 2, Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
console.log(threeSumClosest([0,0,0],1))// Output: 0, Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
