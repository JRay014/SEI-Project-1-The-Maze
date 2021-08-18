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
    x: 48,
    y: 702,
    playerModelBoundX: this.x + 24,
    playerModelBoundY: this.y + 18,

    render: function() {
        ctx.drawImage(playerImg, this.x, this.y, 24, 18);
    },
    move: function(pr) {
        if (pr.key === "w") {
            if (wallsCheck() == 0) {
                this.y += 24;
            } else if (wallsCheck() == 1) {
                this.y -= 6;
            }
        } else if (pr.key === "s") {
            if (wallsCheck() == 0) {
                this.y -= 24;
            } else if (wallsCheck() == 1) {
                this.y += 6;
            }
        } else if (pr.key === "a") {
            if (wallsCheck() == 0) {
                this.x += 24;
            } else if (wallsCheck() == 1) {
                this.x -= 6;
            }
        } else if (pr.key === "d") {
            if (wallsCheck() == 0) {
                this.x -= 24;
            } else if (wallsCheck() == 1) {
                this.x += 6;
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
    x: 48,
    y: 48,
    render: function() {
        ctx.drawImage(winImg, this.x, this.y, 18, 18);
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
    player.x = 48;
    player.y = 702;
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

let wall14 = new Walls(756, 0, 0, 0);
let wall15 = new Walls(756, 756, 756, 0);
let wall16 = new Walls(0, 756, 0, 0);
let wall17 = new Walls(756, 756, 0, 756);
maze1Walls.push(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall17);

//generate maze walls
function generateMaze() {
    ctx.beginPath();
    wall1.render();
    wall2.render();
    wall3.render();
    wall4.render();
    wall5.render();
    wall6.render();
    wall7.render();
    wall8.render();
    wall9.render();
    wall10.render();
    wall11.render();
    wall12.render();
    wall13.render();
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
           if (player.y === maze1Walls[i].collision().y[j] || (player.y + 18) === maze1Walls[i].collision().y[j]) {
               checkY = "true";
               break;
           } else {
               checkY = "false";
           }
        }
        for (let k=0; k<maze1Walls[i].collision().x.length; k++) {
            if (player.x === maze1Walls[i].collision().x[k] || (player.x + 24) === maze1Walls[i].collision().x[k]) {
                checkX = "true";
                break;
            } else {
                checkX = "false";
            }
        }
    }
        return 1;
}