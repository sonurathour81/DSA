const reverseArrayInGroup = (arr, len, k) => {
    for (let i = 0; i < len; i += k) {
        let start = i;
        let end = Math.min(i + k - 1, len - 1)
        while (start <= end) {
            let temp = arr[start];
            arr[start] = arr[end]
            arr[end] = temp
            start++;
            end--;
        }
    }
    return arr
}

let arr = [4, 5, 6, 7, 8, 9, 10, 11, 12]
let res = reverseArrayInGroup(arr, arr.length, 3)
console.log(res);