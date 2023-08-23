const SelectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smEl = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smEl] > arr[j]) {
                smEl = j
            }
        }

        let temp = arr[smEl];
        arr[smEl] = arr[i]
        arr[i] = temp
    }
    return arr
}

let arr = [5, 4, 1, -21, 6, 8, 6, 3, -0]
// let arr = [5, 4, 1, 6, 3]
console.log(SelectionSort(arr));

