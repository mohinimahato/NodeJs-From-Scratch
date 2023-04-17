/*
=> function multiplyByTwo takes two argument 1. Arraay of number 2. callback function
=> function should loop through the array and multiply each number by two
=> Pass the result array to the callback function
*/

let x = [0, 1, 4, 6, 8, 10];
function multiplyByTwo(arr, callbackFn) {
    const result = new Array(arr.length); // creating new array of the same lenght as that of passed in the argument array
    for (let i = 0; i < arr.length; i++) {
        result[i] = callbackFn(arr[i] * 2);
    }
    return result;
}
function callbackFn(numArray) {
    return numArray;
}
const callingMultiplyByTwo = multiplyByTwo(x, callbackFn)
console.log(callingMultiplyByTwo);