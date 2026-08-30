class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}
        for pos, item in enumerate(nums):
            complimentary = target - item
            if complimentary in obj:
                return [pos, obj[complimentary]]
            obj[item] = pos