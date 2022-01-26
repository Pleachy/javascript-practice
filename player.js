//need to import context from index.js so that draw() works
import {context} from "./index.js";

class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    //helper function for drawing the player
    draw() {
        context.beginPath();
        // arguments required for arc: arc(x: Int, y: Int, r: Int, starAngle: float, endAngle: float, drawCounterClockwise: Bool (false));
        context.arc(this.x, this.y, this.radius, 0, 360, false);
        context.fillStyle = this.color;
        context.fill();
    }
}

export {Player};