/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let max = nums[0];
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            count++
        } else {
            count--;
            if (count === 0) {
                max = nums[i + 1]
            }
        }
    }

    return max
};