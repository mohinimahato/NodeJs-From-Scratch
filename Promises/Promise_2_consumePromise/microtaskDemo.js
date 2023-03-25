function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log('Resolving the promise');
        resolve('Done');
    })
}
setTimeout(function process() {
    console.log('Timer Completed');
}, 0);
let p = createPromise();
p.then(function fulfillHandler1(value) {
    console.log('We fulfilled1 with a value', value);
},
    function rejectionHandler1(value) { });
p.then(function fulfillHandler2(value) {
    console.log('We fulfilled2 with a value', value);
},
    function rejectionHandler2(value) { });
p.then(function fulfillHandler3(value) {
    console.log('We fulfilled3 with a value', value);
},
    function rejectionHandler3(value) { });

for (let i = 0; i < 1000000; i++) {
    // console.log('Loop Content')/
}
console.log('ending')