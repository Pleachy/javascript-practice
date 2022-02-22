//grab the canvas element from our html file
const canvas = document.querySelector('canvas');
console.log(canvas);

//getting player context, specifically for a 2d environment
const context = canvas.getContext('2d');

//set canvas width to be the size of the screen, innerwWidth is a property of the window object
canvas.width = innerWidth;
//set canvas height to be the size of the screen, innerHeight is a property of the window object
canvas.height = innerHeight;

/* module imports */
import {Player} from "./modules/player.js";
import {Projectile} from "./modules/projectile.js";

//centering our player 
const centeredX = canvas.width / 2;
const centeredY = canvas.height / 2;

//canvas coordinates start at 0,0 from the top left of the canvas box
const player = new Player(centeredX, centeredY, 30, 'blue');
player.draw();

const projectile = new Projectile(
    centeredX,
    centeredY,
    5,
    'red',
    {
        x: 1,
        y: 1
    });

const projectile2 = new Projectile(
    centeredX,
    centeredY,
    5,
    'red',
    {
        x: -1,
        y: 1
    });

//dynamic projectile array
const projectiles = []

//looping animation function
const animate = () => {
    requestAnimationFrame(animate);
    //clear the canvas after every frame.
    context.clearRect(0, 0, canvas.width, canvas.height)
    projectiles.forEach((projectile) => {
        projectile.update();
    })
}

/* event listeners */
addEventListener('click', (event) => {

    /*
    angle will be in radians.
    event.clientY - canvas.height / 2 gives us the distance from the center to our mouse on the Y plane
    event.clientX - canvas.width / 2 gibes us the distance from the center to our mouse click on the X plane
    */
    const projectileAngle = Math.atan2(
                    event.clientY - canvas.height / 2,
                    event.clientX - canvas.width / 2
                )

    const velocity = {
        //cos and sin will give us the perfect ratio between x velocity and y velocity 
        x: Math.cos(projectileAngle),
        y: Math.sin(projectileAngle)
    }

    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'red', velocity));
})

animate();

//need to export context so that player.js can use it
export {context};