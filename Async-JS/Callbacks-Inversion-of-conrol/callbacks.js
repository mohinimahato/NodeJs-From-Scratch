/*
fun -> HOF -> it takes fn(which is a function) as argument
x -> number
fn -> function
*/
function fun(x, fn) {
    for (let i = 0; i < x; i++) {
        console.log(i);
    }
    fn();
}
fun(10, function exec() { //callback function
    console.log("I'm executed")
})
/*
Function fn is technically called callback function, when we pass the function expression exec and it's consumed by the function fun it is called a callback function
*/