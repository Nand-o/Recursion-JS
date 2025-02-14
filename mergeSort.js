function mergeSortRecursive(array) {
    if (array.length <= 1) {
        return array
    }

    let mid = array.length / 2;

    let left = [];
    let right = [];

    for (let i = 0; i < array.length ; i++) {
        if (i < mid) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    left = mergeSortRecursive(left);
    right = mergeSortRecursive(right);

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [] 
    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    
    return [...sortedArr, ...left, ...right]
}

const sortArray1 = mergeSortRecursive([3, 2, 1, 13, 8, 5, 0, 1]);
const sortArray2 = mergeSortRecursive([105, 79, 100, 110]);
console.log(sortArray1);
console.log(sortArray2);