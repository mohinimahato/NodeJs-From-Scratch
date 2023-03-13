function timeConsumingByLoop() {
    console.log("Loop Starts");
    for (let i = 0; i < 100000000; i++) {
        // some task
    }
    console.log('Loops Ends');
}
function timeConsumingByRuntimeFeature() {
    console.log('Starting Timer 0');
    setTimeout(function exec() {
        for (let i = 0; i < 100000000; i++) {
            // some task
        }
        console.log('timer stops 0');
    }, 5000);
}
function timeConsumingByRuntimeFeature1() {
    console.log('Starting Timer 1');
    setTimeout(function exec() {
        console.log('timer stops 1');
    }, 0);
}
function timeConsumingByRuntimeFeature2() {
    console.log('Starting Timer 2');
    setTimeout(function exec() {
        console.log('timer stops 2');
    }, 200);
}
console.log('Hi');
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log('Bye..')