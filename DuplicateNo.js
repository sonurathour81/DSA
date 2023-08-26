const DuplicateNo = (arr) => {
    let duplicateNo = []
    let commonNo = []
    for (let i = 0; i < arr.length; i++) {
        if (commonNo.includes(arr[i])) {
            if (!duplicateNo.includes(arr[i])) {
                duplicateNo.push(arr[i])
            }
        } else {
            commonNo.push(arr[i])
        }
    }
    return duplicateNo
}

// let arr = [1, 2, 4, 6, 9, 1, 4, 7, 9, 6]
// let arr = [5, 4, 1, 6, 3, 9, 9, 5]
// console.log(DuplicateNo(arr));




const DuplicateNo2 = (arr) => {
    let duplicateNo = {}
    let dupArr = [];

    arr.forEach(element => {
        if (duplicateNo[element]) {
            duplicateNo[element] += 1
        } else {
            duplicateNo[element] = 1
        }
    });

    for (item in duplicateNo) {
        if (duplicateNo[item] > 1) {
            dupArr.push(+item)
        }
    }
    return dupArr

}

// let arr2 = [1, 1, 2, 4, 6, 9, 1, 4, 7, 9, 6]
let arr2 = [5, 4, 1, 6, 3, 9, 5]
console.log(DuplicateNo2(arr2));

