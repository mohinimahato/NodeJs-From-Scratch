let count = 0;
let y = setInterval(function exec() {
    count++;
    if (count >= 15) {
        clearInterval(y);
    }
    console.log(count);

}, 500);