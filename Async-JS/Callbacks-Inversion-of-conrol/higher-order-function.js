/*
HOF: functions which take another function as an argument
*/
function f(x, fn) {
    console.log(x);
    console.log(fn);
    fn();
}
f(10, function exec() {
    console.log("Hi! I'm a higher order function..");
})

let arr = [1, 8, 5, 10, 4, 2, 15, 0, 100]
arr.sort();
console.log(arr)
//Expected Output -> [0,1,2,4,5,8,10,15,100]
/*Output we got ->
[
  0, 1, 10, 100, 15,
  2, 4,  5,   8
]
Becasuse ,
It sorts the array in lexicographical order i.e dictionary order
0 -> A
1 -> B
2 -> C
3 -> D
4 -> E
5 -> F
6 -> G
7 -> H
8 -> I
9 -> J
Therefore, 100 = BAA, 15= BF and so on...
*/
//For output in increasing order, we will another function in sort, that defines sort as an hof
let b = [1, 8, 5, 10, 4, 2, 15, 0, 100]
b.sort(function (a, b) {
    return a - b;
});
console.log(b)
/* Output -> [
  0,  1,  2,   4, 5,
  8, 10, 15, 100
]

example of other hof's are; forEach(), map(), filter(), reduce() etc..
*/