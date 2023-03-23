//Run this code in the browser console section for better output
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromiseWithLoop() {
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

        }, 5000)

    })
}

y = createPromiseWithLoop();
console.log(y)

/*Promise {<rejected>: 1}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"rejected"
[[PromiseResult]]
: 
1
   */

