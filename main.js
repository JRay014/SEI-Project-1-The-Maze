const playerIcon = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const ctx = maze.getContext("2d"); 

const playerImg = new Image();
playerImg.src = "./assets/rat_face_icon.png";

const player = {
    x: 0,
    y: 700,
    render: function() {
        ctx.drawImage(playerImg, this.x, this.y, 25, 20);
    },
    move: function(pr) {
        if (pr.key === "w") {
            for (let i=0; i<walls.length; i++) {
                if (this.y == walls[i].y) {
                    console.log(walls[i]);
                    this.y -= 0;
                } else {
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


//generate maze walls
function generateMaze() {
    ctx.beginPath();
    ctx.moveTo(126, 0);
    ctx.lineTo(126, 252);
    ctx.lineTo(378, 252);
    ctx.moveTo(252, 126);
    ctx.lineTo(630, 126);
    ctx.lineTo(630, 504);
    ctx.lineTo(504, 504);
    ctx.moveTo(630, 378);
    ctx.lineTo(0, 378);
    ctx.moveTo(378, 378);
    ctx.lineTo(378, 630);
    ctx.moveTo(126, 756);
    ctx.lineTo(126, 504);
    ctx.lineTo(252, 504);
    ctx.lineTo(252, 630);
    ctx.moveTo(504, 630);
    ctx.lineTo(630, 630);
    ctx.lineTo(630, 756);
    ctx.moveTo(504, 126);
    ctx.lineTo(504, 252);
    ctx.stroke();
}
//generate collision on walls
    //Ties into maze wall generation.
    //Single array with line coordinates on the canvas that loops for collision.
const walls = [
    ctx.lineTo(126, 252),
    ctx.lineTo(378, 252),
    ctx.lineTo(630, 126),
    ctx.lineTo(630, 504),
    ctx.lineTo(504, 504),
    ctx.lineTo(0, 378),
    ctx.lineTo(378, 630),
    ctx.lineTo(126, 504),
    ctx.lineTo(252, 504),
    ctx.lineTo(252, 630),
    ctx.lineTo(630, 630),
    ctx.lineTo(630, 756),
    ctx.lineTo(504, 252)
];
//allow movement 
const game = {
    render: function() {
        ctx.beginPath();
        ctx.clearRect(0, 0, maze.width, maze.height);
        generateMaze();
        player.render();
    }
}

document.addEventListener('keypress', pr => player.move(pr));



//if player x and y match wall x and y then stop movement. 
//loop through walls each time to check. 
//make walls class and add to it each time a new wall is created in a template.