const allSubArray = (arr) => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            for (let k = i; k <= j; k++) {
                str = str + arr[k] + " "
            }
            str = str + '\n'
        }
        str = str + '\n'
    }
    return str
}

let arr = [1, 2, 3, 4]
// console.log(allSubArray(arr));



const subArraySum = (arr, s) => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum == s) {
                str = `${str} ${i + 1} position to ${j + 1} position \n`
                break;
            }
        }
    }
    return str ? str.trimEnd() : -1
}

let arr2 = [1, 3, 4, 5, 7, 3, 5]
// console.log(subArraySum(arr2, 12));




const subArraySum2 = (arr, s) => {
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < arr.length) {
        sum += arr[right]
        if (sum > s) {
            sum -= arr[left]
            left++
        }

        if (sum == s) {
            return [left + 1, right + 1]
        }

        right++
    }

    return -1

}

let arr3 = [1, 3, 4, 5, 7, 5,7]
console.log(subArraySum2(arr3, 12));



