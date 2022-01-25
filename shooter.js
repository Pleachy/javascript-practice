//grab the canvas element from our html file
const canvas = document.querySelector('canvas');

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
}

console.log(context);

