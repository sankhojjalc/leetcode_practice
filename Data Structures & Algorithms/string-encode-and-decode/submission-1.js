class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""; // build one reversible string by prefixing each item with its length
        for (const str of strs) {
            // process every input string in order
            encoded += str.length + "#" + str; // length marker makes decoding unambiguous even if the string has special characters
        }
        return encoded; // return the compact encoded payload
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result = []; // collect decoded strings here
        let i = 0; // pointer walking through the encoded string

        while (i < s.length) {
            // keep reading until we consume the whole payload
            let j = i; // j will find the separator after the length
            while (s[j] !== "#") {
                // read the length prefix digit by digit
                j++; // advance until we hit the delimiter
            }

            const length = parseInt(s.slice(i, j), 10); // convert the length prefix into a number
            const start = j + 1; // the actual string starts right after '#'
            const end = start + length; // the string ends after exactly length characters
            result.push(s.slice(start, end)); // extract and store the original string
            i = end; // move the pointer to the next encoded chunk
        }

        return result; // return the full decoded list
    }
}
