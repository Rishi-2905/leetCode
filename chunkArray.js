// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

var chunk = function (arr, size) {
    if (arr.length == 0) {
        return []
    }
    else if (arr.length < size) {
        return [arr]
    } else {
        let emptyArr = []
        for (let i = 0; i < arr.length;) {
            let temp = []
            for (let j = 0; j < size; j++) {
                if (arr.length != 0) {
                    temp.push(arr.shift())
                }
            }
            emptyArr.push(temp)
        }
        return emptyArr
    }
};