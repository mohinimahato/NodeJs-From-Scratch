//Run this code in the browser console section for better output
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        for (let i = 0; i < 1000000000; i++) {
            // some task
        }
        let num = getRandomInt(10);
        if (num % 2 == 0) {
            // if the random is even we fulfill
            resolve(num);
        }
        else {
            // if the random is even we reject
            reject(num);
        }
    })
}

x = createPromiseWithLoop();
console.log(x)

/* Promise {<fulfilled>: 2}
   [[Prototype]]: Promise
  [[PromiseState]]: "fulfilled"
   [[PromiseResult]]: 2
   */

