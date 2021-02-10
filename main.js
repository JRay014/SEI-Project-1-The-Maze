const playerIcon = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const ctx = maze.getContext("2d"); 

function enterTheMaze() {
    maze.append(playerIcon);
    startButton.remove();
    maze.style.height = '98%';
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
    generateMaze()
}

startButton.addEventListener('click', () => {
    enterTheMaze();
});

function reset() {
    board.append(playerIcon);
    resetButton.remove();
    board.append(startButton);
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
//allow movement 
// const player = {
// 	X: 10,
// 	Y: 10,
// 	render: function() {
// 		ctx.beginPath()
// 	},

// 	move: function(e) {
// 		if (e.key === "w") {
// 			this.Y -= 5
// 		} else if (e.key === "s") {
// 			this.Y += 5
// 		} else if (e.key === "a") {
// 			this.X -= 5
// 		} else if (e.key === "d") {
// 			this.X += 5
// 		}
// 		console.log(this)
// 		console.log(`${this.X}, ${this.Y}`)
// 		ctx.clearRect(0, 0, canvas.width, canvas.height)
// 		game.render()
// 	}
// }

// player.render()

//generate random win point