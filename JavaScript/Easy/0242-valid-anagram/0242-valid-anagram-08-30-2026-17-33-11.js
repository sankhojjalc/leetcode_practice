/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    objS = {};
    objT = {};

    for (let i = 0; i < s.length; i++) {
        objS[s[i]] = (objS[s[i]] || 0) + 1
        objT[t[i]] = (objT[t[i]] || 0) + 1
    }

    let keysOfObjS = Object.keys(objS);
    let keysOfObjT = Object.keys(objT);

    for (let i = 0; i < keysOfObjS.length; i++) {
        if (!keysOfObjT.includes(keysOfObjS[i])) return false
        if (objS[keysOfObjS[i]] !== objT[keysOfObjS[i]]) return false
    }
    return true
};