class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        obj = {}
        for pos, item in enumerate(nums):
            obj[item] = obj.get(item, 0) + 1

        output = sorted(obj.items(), key=lambda x: x[1], reverse=True)[0:k]
        return [x[0] for x in output]
