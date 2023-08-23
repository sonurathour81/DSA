const InsertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1;
        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
    return arr
}

let arr = [5, 4, 1, -21, 6, 8, 6, 3, -0]
// let arr = [5, 4, 1, 6, 3]
console.log(InsertionSort(arr));

