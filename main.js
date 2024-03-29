const playerIcon = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const ctx = maze.getContext("2d"); 

//fx = first X coordinate, fy = first Y coordinate, sx = second X coordinate, sy = second Y coordinate
//lines are drawn from first to second coordinates, diagonals are drawn by having variation on both axies.
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
    x: 0,
    y: 0,
    playerModelBoundX: this.x + 25,
    playerModelBoundY: this.y + 20,

    render: function() {
        ctx.drawImage(playerImg, this.x, this.y, 25, 20);
    },
    move: function(pr) {
        if (pr.key === "w") {
            console.log(this.x);
            console.log(this.y);
            for (let i=0; i<80; i++) {
                this.y += 1;
                console.log(this.y);
            }
            if (wallsCheck() == 0) {
                // this.y += 80;
            } else if (wallsCheck() == 1) {
                this.y -= 80;
            }
        } else if (pr.key === "s") {
            console.log(this.x);
            console.log(this.y);
            if (wallsCheck() == 0) {
                this.y -= 80;
            } else if (wallsCheck() == 1) {
                this.y += 80;
            }
        } else if (pr.key === "a") {
            console.log(this.x);
            console.log(this.y);
            if (wallsCheck() == 0) {
                this.x += 80;
            } else if (wallsCheck() == 1) {
                this.x -= 80;
            }
        } else if (pr.key === "d") {
            console.log(this.x);
            console.log(this.y);
            if (wallsCheck() == 0) {
                this.x -= 80;
            } else if (wallsCheck() == 1) {
                this.x += 80;
            }
        }
        game.render();
        win.winCondition();
    }    
}

document.addEventListener('keypress', pr => player.move(pr));

const winImg = new Image();
winImg.src = "./assets/Cheese.png";

const win = {
    x: 1520,
    y: 80,
    render: function() {
        ctx.drawImage(winImg, this.x, this.y, 20, 20);
    },
    winCondition: function() {
        if (((player.x >= 48) && (player.y >= 48)) && (player.x <= 66) && (player.y <= 66)) {
            alert("You Escaped the Maze!");
            reset();
        }
    }
}

//Update board
const game = {
    render: function() {
        ctx.beginPath();
        ctx.clearRect(0, 0, maze.width, maze.height);
// ctx.clearRect(0, 0, player.x, player.y);
        generateMaze();
        player.render();
        win.render();
    }
}




function enterTheMaze() {
    playerIcon.remove();
    startButton.remove();
    maze.style.height = '98%';
    resetButton.classList.add("reset");
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
    player.x = 480;
    player.y = 1520;
    generateMaze();
    player.render();
    win.render();
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

//Level walls container
const maze1Walls = []

//Define level walls
//Create/define units for walls?
let wall1 = new Walls(1360, 160, 1600, 160);
let wall2 = new Walls(1440, 560, 1600, 560);
let wall3 = new Walls(1360, 880, 1600, 880);
let wall4 = new Walls(1520, 1040, 1600, 1040);
let wall5 = new Walls(1520, 1440, 1600, 1440);//
let wall6 = new Walls(1200, 0, 1200, 400);//
let wall7 = new Walls(1200, 400, 1360, 400);
let wall8 = new Walls(1360, 320, 1360, 720);//
let wall9 = new Walls(1360, 320, 1520, 320);
let wall10 = new Walls(1360, 720, 1520, 720);
let wall11 = new Walls(1360, 880, 1360, 1280);
let wall12 = new Walls(1360, 1280, 1520, 1280);
let wall13 = new Walls(1280, 1440, 1440, 1440);///
let wall18 = new Walls(1440, 1440, 1440, 1520);
let wall19 = new Walls(960, 0, 960, 80);
let wall20 = new Walls(1040, 80, 1040, 560);
let wall21 = new Walls(960, 560, 1280, 560);
let wall22 = new Walls(1280, 560, 1280, 960);
let wall23 = new Walls(1280, 960, 1360, 960);
let wall24 = new Walls(960, 1120, 1280, 1120);
let wall25 = new Walls(1280, 1120, 1280, 1600);
let wall26 = new Walls(720, 80, 720, 240);
let wall27 = new Walls(560, 240, 1040, 240);
let wall28 = new Walls(800, 400, 960, 400);
let wall29 = new Walls(800, 400, 800, 1360);
let wall30 = new Walls(800, 720, 1120, 720);
let wall31 = new Walls(800, 960, 1120, 960);
let wall32 = new Walls(640, 1360, 1040, 1360);
let wall33 = new Walls(1040, 1360, 1040, 1520);
let wall34 = new Walls(80, 160, 560, 160);
let wall35 = new Walls(560, 160, 560, 400);
let wall36 = new Walls(640, 400, 640, 960);
let wall37 = new Walls(640, 1120, 640, 1360);
let wall38 = new Walls(80, 160, 80, 320);
let wall39 = new Walls(80, 320, 400, 320);
let wall40 = new Walls(400, 320, 400, 480);
let wall41 = new Walls(80, 400, 80, 560);
let wall42 = new Walls(0, 560, 480, 560);
let wall43 = new Walls(480, 560, 480, 800);
let wall44 = new Walls(160, 720, 320, 720);
let wall45 = new Walls(320, 720, 320, 1120);
let wall46 = new Walls(320, 960, 640, 960);
let wall47 = new Walls(160, 1120, 320, 1120);
let wall48 = new Walls(480, 1120, 480, 1440);
let wall49 = new Walls(160, 1440, 880, 1440);
let wall50 = new Walls(0, 960, 160, 960);
let wall51 = new Walls(0, 1360, 320, 1360);
let wall52 = new Walls(560, 400, 640, 400);
let wall53 = new Walls(320, 1280, 320, 1360);
let wall54 = new Walls(160, 1280, 320, 1280);

//Border Walls so the edges of the maze have collision.
let wall14 = new Walls(1600, 0, 0, 0);
let wall15 = new Walls(1600, 1600, 1600, 0);
let wall16 = new Walls(0, 1600, 0, 0);
let wall17 = new Walls(1600, 1600, 0, 1600);

//Adding level walls to walls container (extra wall added at the end for error fix, final wall was not generating with out repeat. fixed)
// for (let i = 0; i <= 54; i++) {
//     maze1Walls.push(wall[i]);
// }
maze1Walls.push(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, 
    wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20,
    wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30,
    wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40,
    wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50,
    wall51, wall52, wall53, wall54);

//generate maze walls on board
function generateMaze() {
    // ctx.beginPath();

    for (let i = 0; i < maze1Walls.length; i++) {
        ctx.beginPath();
        maze1Walls[i].render();
        ctx.stroke();
    }

    // //border walls
    // wall14.render();
    // wall15.render();
    // wall16.render();
    // wall17.render();

    // ctx.stroke();
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
           if (player.y === maze1Walls[i].collision().y[j] || (player.y + 20) === maze1Walls[i].collision().y[j]) {
               checkY = "true";
               break;
           } else {
               checkY = "false";
           }
        }
        for (let k=0; k<maze1Walls[i].collision().x.length; k++) {
            if (player.x === maze1Walls[i].collision().x[k] || (player.x + 25) === maze1Walls[i].collision().x[k]) {
                checkX = "true";
                break;
            } else {
                checkX = "false";
            }
        }
    }
        return 1;
}