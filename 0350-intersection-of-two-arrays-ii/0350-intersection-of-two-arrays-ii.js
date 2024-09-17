/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const larger = nums1.length > nums2.length ? nums1 : nums2;
    const lower = nums1.length > nums2.length ? nums2 : nums1;
    const result = [];
    
    for (let i = 0; i < lower.length; i++) {
        for (let j = 0; j < larger.length; j++) {
            if (lower[i] === larger[j]) {
                result.push(lower[i]);
                larger.splice(j, 1);
                lower.splice(i, 1);
                i--;
                break;
            }
        }
    }
    
    return result;
};