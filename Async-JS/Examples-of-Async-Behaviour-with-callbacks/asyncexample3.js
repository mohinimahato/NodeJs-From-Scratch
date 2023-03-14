console.log('Hello World');
setTimeout(function exec() {
    console.log('Timer Done');
    setTimeout(function exec2() {
        console.log('Woah another one')
    }, 10);
}, 0)
for (let i = 0; i < 1000; i++) {
    // some task
}
console.log('end');