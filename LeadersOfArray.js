// First approch
// O(n2)
const findLeaders1 = (arr) => {
    let leaderNo = [];
    for (let i = 0; i < arr.length; i++) {
        let isLeader = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isLeader = false;
                break;
            }
        }
        if (isLeader) {
            leaderNo.push(arr[i])
        }
    }
    return leaderNo
}

let arr1 = [8, 11, 5, 11, 7, 6, 3, 15, 8]


// First approch
// O(n)
const findLeaders2 = (arr) => {
    let leaderNo = [arr[arr.length - 1]];
    let currentLeader = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > currentLeader) {
            currentLeader = arr[i]
            leaderNo.push(arr[i])
        }
    }
    return leaderNo.reverse()
}

let arr = [8, 11, 5, 11, 7, 6,31, 30,8,9]

console.log("Leaders=>", findLeaders2(arr));
