//grab the canvas element from our html file
const canvas = document.querySelector('canvas');
console.log(canvas);

//getting player context, specifically for a 2d environment
const context = canvas.getContext('2d');

//set canvas width to be the size of the screen, innerwWidth is a property of the window object
canvas.width = innerWidth;
//set canvas height to be the size of the screen, innerHeight is a property of the window object
canvas.height = innerHeight;

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

//canvas coordinates start at 0,0 from the top left of the canvas box
const player = new Player(100, 100, 30, 'blue');
console.log(player);
player.draw();