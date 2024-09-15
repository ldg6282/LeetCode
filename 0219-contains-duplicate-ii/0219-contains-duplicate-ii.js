/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const lastIndex = {};
  
    for (let i = 0; i < nums.length; i++) {
        if (lastIndex.hasOwnProperty(nums[i])) {
            if (Math.abs(lastIndex[nums[i]] - i) <= k) {
                return true;
            }
        }
        lastIndex[nums[i]] = i;
    }
  
    return false;
};