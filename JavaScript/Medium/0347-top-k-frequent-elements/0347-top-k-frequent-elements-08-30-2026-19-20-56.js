/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }

    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1])
    return sorted.slice(0, k).map(item => Number(item[0]))
};