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
    generateMaze();
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
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


//generate random maze walls
function generateMaze() {
    ctx.beginPath();
    ctx.moveTo(Math.random()*maze.width, Math.random()*maze.height);
    for (let i=0; i<maze.width; i++) {
        ctx.lineTo();
        ctx.lineWidth = 3;
        ctx.stroke;
    }
}
//generate collision on walls
    //Ties into maze wall generation.

//allow movement 
const player = {
	X: 10,
	Y: 10,
	render: function() {
		ctx.beginPath()
	},

	move: function(e) {
		if (e.key === "w") {
			this.Y -= 5
		} else if (e.key === "s") {
			this.Y += 5
		} else if (e.key === "a") {
			this.X -= 5
		} else if (e.key === "d") {
			this.X += 5
		}
		console.log(this)
		console.log(`${this.X}, ${this.Y}`)
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		game.render()
	}
}

player.render()

//generate random win point