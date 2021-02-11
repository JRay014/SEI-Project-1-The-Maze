const playerIcon = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const ctx = maze.getContext("2d"); 

const playerImg = new Image();
playerImg.src = "./assets/rat_face_icon.png";

const player = {
    x: 50,
    y: 700,
    render: function() {
        ctx.drawImage(playerImg, this.x, this.y, 25, 20);
    },
    move: function(pr) {
        if (pr.key === "w") {
            for (let i=0; i<wallsCollision.length; i++) {
                if (this.y == wallsCollision[i].y) {
                    console.log(wallsCollision[i]);
                    this.y = 0;
                } else {
                console.log(wallsCollision);
                this.y -= 15;
                }
            }
        } else if (pr.key === "s") {
        	this.y += 15
        } else if (pr.key === "a") {
        	this.x -= 15
        } else if (pr.key === "d") {
        	this.x += 15
        }
        game.render();
    }    
}

class Walls {
    constructor(x, y) {
        this.x = x,
        this.y = y
    } 
    render() {
        ctx.lineTo(this.x, this.y);
    }
    collision() {
        ctx.isPointInPath(this.x, this.y); //isPointInStroke
        wallsCollision.push({
        x: this.x,
        y: this.y
        });
    }
}
const wallsCollision = [];

function enterTheMaze() {
    playerIcon.remove();
    startButton.remove();
    maze.style.height = '98%';
    resetButton.classList.add("reset");
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
    generateMaze();
    player.render();
}

startButton.addEventListener('click', () => {
    enterTheMaze();
});

function reset() {
    board.append(playerIcon);
    resetButton.remove();
    board.append(startButton);
    ctx.beginPath();
    ctx.clearRect(0, 0, maze.width, maze.height);
}

resetButton.addEventListener('click', reset)


let wall1 = new Walls(126, 252);
let wall2 = new Walls(378, 252);
let wall3 = new Walls(630, 126);
let wall4 = new Walls(630, 504);
let wall5 = new Walls(504, 504);
let wall6 = new Walls(0, 378);
let wall7 = new Walls(378, 630);
let wall8 = new Walls(126, 504);
let wall9 = new Walls(252, 504);
let wall10 = new Walls(252, 630);
let wall11 = new Walls(630, 630);
let wall12 = new Walls(630, 756);
let wall13 = new Walls(504, 256);
//generate maze walls
function generateMaze() {
    ctx.beginPath();
    ctx.moveTo(126, 0);
    wall1.render();
    // ctx.lineTo(126, 252);
    wall2.render();
    // ctx.lineTo(378, 252);
    ctx.moveTo(252, 126);
    wall3.render();
    // ctx.lineTo(630, 126);
    wall4.render();
    // ctx.lineTo(630, 504);
    wall5.render();
    // ctx.lineTo(504, 504);
    ctx.moveTo(630, 378);
    wall6.render();
    // ctx.lineTo(0, 378);
    ctx.moveTo(378, 378);
    wall7.render();
    // ctx.lineTo(378, 630);
    ctx.moveTo(126, 756);
    wall8.render();
    // ctx.lineTo(126, 504);
    wall9.render();
    // ctx.lineTo(252, 504);
    wall10.render();
    // ctx.lineTo(252, 630);
    ctx.moveTo(504, 630);
    wall11.render();
    // ctx.lineTo(630, 630);
    wall12.render();
    // ctx.lineTo(630, 756);
    ctx.moveTo(504, 126);
    wall13.render();
    // ctx.lineTo(504, 252);
    ctx.stroke();
}
//generate collision on walls
    //Ties into maze wall generation.
    //Single array with line coordinates on the canvas that loops for collision.

function addWallsCollision(wx, wy) {
    ctx.lineTo(wx, wy);
    ctx.isPointInPath(wx, wy); //isPointInStroke
    walls.push({
        x: wx,
        y: wy
    });
}
wall1.collision()
wall2.collision()
wall3.collision()
wall4.collision()
wall5.collision()
wall6.collision()
wall7.collision()
wall8.collision()
wall9.collision()
wall10.collision()
wall11.collision()
wall12.collision()
wall13.collision()

//Update board
const game = {
    render: function() {
        ctx.beginPath();
        ctx.clearRect(0, 0, maze.width, maze.height);
        // ctx.clearRect(0, 0, player.x, player.y);
        generateMaze();
        player.render();
        //add win point
    }
}

document.addEventListener('keypress', pr => player.move(pr));



//if player x and y match wall x and y then stop movement. 
//loop through walls each time to check. 
//make walls class and add to it each time a new wall is created in a template.

//collision on walls
//collision on edges
//collision on win point