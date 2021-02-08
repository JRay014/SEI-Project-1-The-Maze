const player = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const ctx = maze.getContext("2d"); 

function enterTheMaze() {
    maze.append(player);
    startButton.remove();
    maze.style.height = '98%';
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
}

startButton.addEventListener('click', () => {
    enterTheMaze();
});

function reset() {
    board.append(player);
    resetButton.remove();
    board.append(startButton);
}

resetButton.addEventListener('click', reset)


//generate random maze walls
//generate collision on walls
//allow movement 
//generate random win point