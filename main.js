const player = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const mazeTiles = document.querySelectorAll('.maze-tile');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const tile15 = document.querySelector('#fifthteen');
const tile6 = document.querySelector('#six');

const moveConditions = {
    fifthteen: ['twenty'],
    twenty: ['fifthteen','nineteen'],
    nineteen: ['twenty','fourteen'],
    fourteen: ['nineteen','nine'],
    nine: ['fourteen','ten','eight'],
    ten: ['nine'],
    eight: ['nine','seven'],
    seven: ['eight','six'],
}

function enterTheMaze(startTile) {
    startTile.append(player);
    startButton.remove();
    maze.style.height = '98%';
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
}

startButton.addEventListener('click', () => {
    enterTheMaze(tile15);
});

mazeTiles.forEach((mazeTile) => {
    mazeTile.addEventListener('click', (evt) => {
       move(evt.target);
       console.log(evt.target);
    })
});

function move(moveToTile) {
    currentTile = player.parentElement.id;
    for (let i = 0; i < 4; i++) {
        // console.log("Test: ", moveConditions[currentTile][i]);
        if (moveConditions[currentTile][i] == moveToTile.id) {
          moveToTile.append(player);
        }
    }
}

function reset() {
    board.append(player);
    resetButton.remove();
    board.append(startButton);
}

resetButton.addEventListener('click', reset)

function win() {
    if(player.parentElement == tile6) {
        alert('You made it out of the Maze!');
        reset();
    }
}
