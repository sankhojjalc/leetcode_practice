class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        dictS = {}
        dictT = {}

        for pos, _ in enumerate(s):
            dictS[s[pos]] = dictS.get(s[pos], 0) + 1
            dictT[t[pos]] = dictT.get(t[pos], 0) + 1

        keysInDictS = dictS.keys()
        keysInDictT = dictT.keys()

        for item in keysInDictS:
            if item not in keysInDictT:
                return False
            if dictS[item] != dictT[item]:
                return False

        return True
