/*
This code defines a JavaScript class called Ball using the class keyword. The export default syntax is used to make the Ball class available for use in other modules.

The constructor method is called when a new instance of the Ball class is created. It takes a single argument, ballElem, which is a reference to an HTML element that represents the ball in a game or animation.

Inside the constructor, the this keyword refers to the new instance of the Ball class being created. The ballElem argument is stored as a property of the instance using this.ballElem.

The reset method is also called inside the constructor using this.reset(). It is not shown in the provided code snippet, but presumably, it sets the initial position and state of the ball.

Overall, this code defines a class that represents a ball in a game or animation, and initializes it with an HTML element and an initial state.
*/
const INITIAL_VElOCITY = 0.025;
const VELOCITY_INCREASE = 0.00001;
export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem;
        this.reset();
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--x'));
    }
    set x(value) {
        this.ballElem.style.setProperty('--x', value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--y'));
    }
    set y(value) {
        this.ballElem.style.setProperty('--y', value)
    }
    rect() {
        return this.ballElem.getBoundingClientRect()
    }
    reset() {
        this.x = 25;
        this.y = 25;
        this.direction = { x: 0 };
        while (
            Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            const heading = randomNumberBetween(0, 2 * Math.PI);
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VElOCITY
    }

    update(delta, paddleRects) {

        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity * delta;
        this.velocity += VELOCITY_INCREASE * delta;
        const rect = this.rect()
        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            this.direction.y *= -1
        }
        if (paddleRects.some(r => isCollision(r, rect))) {
            this.direction.x *= -1
        }

    }

}
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}
function isCollision(rect1, rect2) {
    return rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
}