const swap = (el1, el2) => {
    el1 = el1 + el2
    el2 = el1 - el2
    el1 = el1 - el2
    return [el1, el2]
}

const zigZag = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = swap(arr[i], arr[i + 1])
        } else if (i % 2 == 1 && arr[i] < arr[i + 1]) {
            [arr[i], arr[i + 1]] = swap(arr[i], arr[i + 1])
        }
    }
    return arr
}

let arr = [30, 7, 20, 4, 8, 6, 2, 1, 5, 40]
console.log("ZigZag=>", zigZag(arr));

