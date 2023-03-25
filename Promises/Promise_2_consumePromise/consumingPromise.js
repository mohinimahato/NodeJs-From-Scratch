//Run this code in the browser console section for better output
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromiseWithSetTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                // if the random is even we fulfill
                resolve(num);
            }
            else {
                // if the random is even we reject
                reject(num);
            }

        }, 10000);
        console.log('Exiting the executor callback in the promise constructor')

    })
}

console.log('Starting...');
const p = createPromiseWithSetTimeout();
console.log('We are now waiting for the promise to complete');
console.log("Currently my promise object is like ", p)
p
    .then(
        function fulfillHandler(value) {
            console.log("Inside fulfill handler with value", value);
            console.log('Promise after fulfillment is', p)
        },
        function rejectionHandler(value) {
            console.log("Inside rejection handler with value", value);
            console.log('Promise after rejection is', p)
        }
    )


