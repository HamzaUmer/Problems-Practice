const twoSum = (nums, target)=> {
    for(let i =0; i <= nums.length; i++){
        for(let j=1; j<=nums.length; i++){
            if(nums[i] + nums[j] === target){
                if(i !== j){
                    return [i,j]
                }
            }
        }
    }
};

const n = [2,7,11,15];
const t = 9;
console.log(twoSum(n,t))

//output would be [0,1]
