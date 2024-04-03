// question
//Input: s = "egg", t = "add"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    else {
        s = Array.from(s);
        t = Array.from(t);
        let arr = {}
        for (let i = 0; i < s.length; i++) {
            if (!Object.keys(arr).includes(s[i]) && !Object.values(arr).includes(t[i])) {
                arr = Object.assign(arr, { [s[i]]: t[i] })
            } else {
                if (arr[s[i]] != t[i]) {
                    return false;
                }
            }
        }
        return true
    }
};