// importing the modules that are getting use
import Ball from "../ping-pong/module/Ball.Js";
import Paddle from "../ping-pong/module/Paddle.Js";

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('playerLeft'));
const computerPaddle = new Paddle(document.getElementById('playerRightComputer'));
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let lastTime;
function update(time) {

    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
        computerPaddle.update(delta, ball.y);
        if (isLose()) handleLose()

    }

    lastTime = time;
    window.requestAnimationFrame(update)
}
function isLose() {
    const rect = ball.rect()
    return rect.left >= window.innerWidth || rect.left <= 0
}
function handleLose() {
    const rect = ball.rect();
    if (rect.right >= window.innerWidth) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;

    }
    ball.reset();
    computerPaddle.reset();
}
document.addEventListener('mousemove', e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100;
})
window.requestAnimationFrame(update)


