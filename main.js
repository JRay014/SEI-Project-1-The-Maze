const playerIcon = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const ctx = maze.getContext("2d"); 


class Walls {
    constructor(fx, fy, sx, sy) {
        this.fx = fx,
        this.fy = fy,
        this.sx = sx,
        this.sy = sy
    } 
    render() {
        ctx.moveTo(this.sx, this.sy);
        ctx.lineTo(this.fx, this.fy);
    }
    collision() {
        const wallsCollision = {
            x: [],
            y: []
        }
        for (let i = this.sx; i <= this.fx; i++) {
            wallsCollision.x.push(i);
        }
        for (let i = this.sy; i <= this.fy; i++) {
            wallsCollision.y.push(i);
        }
        return wallsCollision;
    }
}


const playerImg = new Image();
playerImg.src = "./assets/rat_face_icon.png";

const player = {
    x: 66,
    y: 702,
    render: function() {
        ctx.drawImage(playerImg, this.x, this.y, 25, 20);
    },
    move: function(pr) {
        if (pr.key === "w") {
            if (wallsCheck() == 0) {
                this.y += 12;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            } else if (wallsCheck() == 1) {
                this.y -= 6;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            }
        } else if (pr.key === "s") {
            if (wallsCheck() == 0) {
                this.y -= 12;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            } else if (wallsCheck() == 1) {
                this.y += 6;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            }
        } else if (pr.key === "a") {
            if (wallsCheck() == 0) {
                this.x += 12;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            } else if (wallsCheck() == 1) {
                this.x -= 6;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            }
        } else if (pr.key === "d") {
            if (wallsCheck() == 0) {
                this.x -= 6;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            } else if (wallsCheck() == 1) {
                this.x += 6;
                console.log(`Check: ${wallsCheck()}`);
                console.log(`player x: ${player.x}`);
                console.log(`player y: ${player.y}`);
            }

                // for (let i=0; i<wall6.collision().y.length; i++) {
            //     if (this.y === wall6.collision().y[i]) {
            //         console.log("Bang");
            //         this.y -= 0;
            //         break;
            //     } else {
            //         this.y -= 12;
            //     }
            // }

            // for (let i=0; i < maze1Walls.length; i++){
            //     if ((this.x >= maze1Walls[i].sx && this.x <= maze1Walls[i].fx) || (this.y >= maze1Walls[i].sy && this.y <= maze1Walls[i].fy)){
            //         console.log('Collide');
            //         this.x += 0;
            //     } else if ((this.x <= maze1Walls[i].sx || this.x >= maze1Walls[i].fx) && (this.y <= maze1Walls[i].sy || this.y >= maze1Walls[i].fy)) {
            //         this.x += 1;
            //     }
            // }
        }
        game.render();
    }    
}

document.addEventListener('keypress', pr => player.move(pr));

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

resetButton.addEventListener('click', reset);


const maze1Walls = []
let wall1 = new Walls(126, 252, 126, 0);
let wall2 = new Walls(378, 252, 126, 252);
let wall3 = new Walls(630, 126, 252, 126);
let wall4 = new Walls(630, 504, 630, 126);
let wall5 = new Walls(630, 504, 504, 504);//
let wall6 = new Walls(630, 378, 0, 378);//
let wall7 = new Walls(378, 630, 378, 378);
let wall8 = new Walls(126, 756, 126, 504);//
let wall9 = new Walls(252, 504, 126, 504);
let wall10 = new Walls(252, 630, 252, 504);
let wall11 = new Walls(630, 630, 504, 630);
let wall12 = new Walls(630, 756, 630, 630);
let wall13 = new Walls(504, 256, 504, 126);///
maze1Walls.push(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13);

//generate maze walls
function generateMaze() {
    ctx.beginPath();
    // ctx.moveTo(126, 0);
    wall1.render();
    // ctx.lineTo(126, 252);
    wall2.render();
    // ctx.lineTo(378, 252);
    // ctx.moveTo(252, 126);
    wall3.render();
    // ctx.lineTo(630, 126);
    wall4.render();
    // ctx.lineTo(630, 504);
    wall5.render();
    // ctx.lineTo(504, 504);
    // ctx.moveTo(630, 378);
    wall6.render();
    // ctx.lineTo(0, 378);
    // ctx.moveTo(378, 378);
    wall7.render();
    // ctx.lineTo(378, 630);
    // ctx.moveTo(126, 756);
    wall8.render();
    // ctx.lineTo(126, 504);
    wall9.render();
    // ctx.lineTo(252, 504);
    wall10.render();
    // ctx.lineTo(252, 630);
    // ctx.moveTo(504, 630);
    wall11.render();
    // ctx.lineTo(630, 630);
    wall12.render();
    // ctx.lineTo(630, 756);
    // ctx.moveTo(504, 126);
    wall13.render();
    // ctx.lineTo(504, 252);
    ctx.stroke();
}

//check function
function wallsCheck() {
    let checkY = ""
    let checkX = ""
    for (let i=0; i<maze1Walls.length; i++){
        if (checkY == "true" && checkX == "true") {
            return 0;
        }
        for (let j=0; j<maze1Walls[i].collision().y.length; j++) {
           if (player.y === maze1Walls[i].collision().y[j]) {
               checkY = "true";
               break;
           } else {
               checkY = "false";
           }
        }
        for (let k=0; k<maze1Walls[i].collision().x.length; k++) {
            if (player.x === maze1Walls[i].collision().x[k]) {
                checkX = "true";
                break;
            } else {
                checkX = "false";
            }
        }
    }
        return 1;
}

//generate collision on walls
//Ties into maze wall generation.
    //Single array with line coordinates on the canvas that loops for collision.

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

console.log(maze1Walls[0].collision().x);
console.log(maze1Walls[0].collision().y);
console.log(maze1Walls[1].collision().x);
console.log(maze1Walls[1].collision().y);
console.log(player.x);
console.log(player.y);
    
    
    
    
    
    
//if player x and y match wall x and y then stop movement. 
//loop through walls each time to check. 
//make walls class and add to it each time a new wall is created in a template.
    
//collision on walls
//collision on edges
//collision on win point




    // function addWallsCollision(wx, wy) {
    //     ctx.lineTo(wx, wy);
    //     ctx.isPointInPath(wx, wy); //isPointInStroke
    //     walls.push({
    //         x: wx,
    //         y: wy
    //     });
    // }
    // for (let i=0; i<wallsCollision.length; i++) {
            //     if (this.x == wallsCollision[i].x) {
            //         console.log(wallsCollision[i]);
            //         this.x -= 0;
            //     } else {
            //         console.log(wallsCollision);
                    // this.x -= 1;
            //     }
            // }