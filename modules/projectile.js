import {context} from "../index.js";


class Projectile {
    constructor (x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() {
        context.beginPath();
        // arguments required for arc: arc(x: Int, y: Int, r: Int, starAngle: float, endAngle: float, drawCounterClockwise: Bool (false));
        context.arc(this.x, this.y, this.radius, 0, 360, false);
        context.fillStyle = this.color;
        context.fill();
    }

    //updates the projectile location based on velocity values
    update() {
        this.draw();
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}


export {Projectile};