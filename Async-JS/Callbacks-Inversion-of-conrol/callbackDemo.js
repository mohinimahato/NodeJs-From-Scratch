setTimeout(function exec() {
    console.log("Executed after 4 sec")
}, 4000)
/*
So, setTimeout is also a hof because it takes a callback that we are passing inside setTimeOut 
*/
/*
HOF are those functions which take a function as an argument, the function that we pass as an argument is the callback function
*/