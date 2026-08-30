/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = +i
    }

    for (let i = 0; i < nums.length; i++) {
        const complementary = target - nums[i];

        if (hash[complementary] && hash[complementary] !== i) {
            return [i, hash[complementary]]
        }
    }
}
