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

//Level walls container
const maze1Walls = []

//Define level walls
let wall1 = new Walls(0, 0, 0, 0);
let wall2 = new Walls(0, 0, 0, 0);
let wall3 = new Walls(0, 0, 0, 0);
let wall4 = new Walls(0, 0, 0, 0);
let wall5 = new Walls(0, 0, 0, 0);//
let wall6 = new Walls(0, 0, 0, 0);//
let wall7 = new Walls(0, 0, 0, 0);
let wall8 = new Walls(0, 0, 0, 0);//
let wall9 = new Walls(0, 0, 0, 0);
let wall10 = new Walls(0, 0, 0, 0);
let wall11 = new Walls(0, 0, 0, 0);
let wall12 = new Walls(0, 0, 0, 0);
let wall13 = new Walls(0, 0, 0, 0);///
let wall18 = new Walls(0, 0, 0, 0);
let wall19 = new Walls(0, 0, 0, 0);
let wall20 = new Walls(0, 0, 0, 0);
let wall21 = new Walls(0, 0, 0, 0);
let wall22 = new Walls(0, 0, 0, 0);
let wall23 = new Walls(0, 0, 0, 0);
let wall24 = new Walls(0, 0, 0, 0);
let wall25 = new Walls(0, 0, 0, 0);
let wall26 = new Walls(0, 0, 0, 0);
let wall27 = new Walls(0, 0, 0, 0);
let wall28 = new Walls(0, 0, 0, 0);
let wall29 = new Walls(0, 0, 0, 0);
let wall30 = new Walls(0, 0, 0, 0);
let wall31 = new Walls(0, 0, 0, 0);
let wall32 = new Walls(0, 0, 0, 0);
let wall33 = new Walls(0, 0, 0, 0);
let wall34 = new Walls(0, 0, 0, 0);
let wall35 = new Walls(0, 0, 0, 0);
let wall36 = new Walls(0, 0, 0, 0);
let wall37 = new Walls(0, 0, 0, 0);
let wall38 = new Walls(0, 0, 0, 0);
let wall39 = new Walls(0, 0, 0, 0);
let wall40 = new Walls(0, 0, 0, 0);
let wall41 = new Walls(0, 0, 0, 0);
let wall42 = new Walls(0, 0, 0, 0);
let wall43 = new Walls(0, 0, 0, 0);
let wall44 = new Walls(0, 0, 0, 0);
let wall45 = new Walls(0, 0, 0, 0);
let wall46 = new Walls(0, 0, 0, 0);
let wall47 = new Walls(0, 0, 0, 0);
let wall48 = new Walls(0, 0, 0, 0);
let wall49 = new Walls(0, 0, 0, 0);
let wall50 = new Walls(0, 0, 0, 0);
let wall51 = new Walls(0, 0, 0, 0);

//Border Walls so the edges of the maze have collision.
let wall14 = new Walls(1600, 0, 0, 0);
let wall15 = new Walls(1600, 1600, 1600, 0);
let wall16 = new Walls(0, 1600, 0, 0);
let wall17 = new Walls(1600, 1600, 0, 1600);

//Adding level walls to walls container (entra wall added at the end for error fix, final wall was not generating with out repeat.)
maze1Walls.push(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, 
    wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20,
    wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30,
    wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40,
    wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50,
    wall51, wall51);

//generate maze walls on board
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
    wall18.render();
    wall19.render();
    wall20.render();
    wall21.render();
    wall22.render();
    wall23.render();
    wall24.render();
    wall25.render();
    wall26.render();
    wall27.render();
    wall28.render();
    wall29.render();
    wall30.render();
    wall31.render();
    wall32.render();
    wall33.render();
    wall34.render();
    wall35.render();
    wall36.render();
    wall37.render();
    wall38.render();
    wall39.render();
    wall40.render();
    wall41.render();
    wall42.render();
    wall43.render();
    wall44.render();
    wall45.render();
    wall46.render();
    wall47.render();
    wall48.render();
    wall49.render();
    wall50.render();
    wall51.render();

    //border walls
    wall14.render();
    wall15.render();
    wall16.render();
    wall17.render();

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