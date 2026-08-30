class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += `${str.length}#${str}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let index = 0;

        while (index < str.length) {
            const separatorIndex = str.indexOf("#", index);
            const length = Number(str.slice(index, separatorIndex));
            const start = separatorIndex + 1;
            const value = str.slice(start, start + length);

            decoded.push(value);
            index = start + length;
        }

        return decoded;
    }
}
