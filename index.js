//grab the canvas element from our html file
const canvas = document.querySelector('canvas');
console.log(canvas);

//getting player context, specifically for a 2d environment
const context = canvas.getContext('2d');

//set canvas width to be the size of the screen, innerwWidth is a property of the window object
canvas.width = innerWidth;
//set canvas height to be the size of the screen, innerHeight is a property of the window object
canvas.height = innerHeight;

import {Player} from "./player.js";

//canvas coordinates start at 0,0 from the top left of the canvas box
const player = new Player(100, 100, 30, 'blue');
console.log(player);
player.draw();

//need to export context so that player.js can use it
export {context};