/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const result = [];
    const zero = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        zero.push(nums[i]);
      } else {
        result.push(nums[i])
      }
    }
  
    nums = result.concat(zero);
};