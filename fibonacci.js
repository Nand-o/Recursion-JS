const fibonacci = function (num) {
    const index = parseInt(num);
    if (index < 0) return "OOPS";
    let arrFibo = [0, 1];
    for (let i = 2; i <= index; i++) {
        let temp = arrFibo[i - 1] + arrFibo[i - 2];
        arrFibo.push(temp);
    }
    return arrFibo
};

console.log(fibonacci("100"));

const recursiveFibonacci = function (num, arr = [0, 1], index = 2) {
    if (num < index) {
        console.log(arr)
        return
    }

    arr[index] = (arr[index - 1] + arr[index - 2]);
    recursiveFibonacci(num, arr, index + 1);
}

recursiveFibonacci(100);