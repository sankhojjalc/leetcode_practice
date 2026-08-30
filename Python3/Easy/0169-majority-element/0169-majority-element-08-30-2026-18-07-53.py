class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        max = nums[0]
        count = 0

        for pos, item in enumerate(nums):
            if item == max:
                count += 1
            else:
                count -= 1
                if count == 0:
                    max = nums[pos + 1]

        return max
