function timeConsumingByLoop() {
    console.log("Loop Starts");
    for (let i = 0; i < 100000000; i++) {
        // some task
    }
    console.log('Loops Ends');
}
function timeConsumingByRuntimeFeature() {
    console.log('Starting Timer');
    setTimeout(function exec() {
        console.log('timer stops');
    }, 5000);
}
console.log('Hi');
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log('Bye..')