console.log("Hello World!");
for (let i = 0; i < 3; i++) {
    setTimeout(function exec() {
        console.log('Timer Done', i);
    }, 1000);

}

console.log('End');

// Any asnchronous piece of code can't hamper synchronous code