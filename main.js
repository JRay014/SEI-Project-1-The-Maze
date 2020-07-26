const player = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const mazeTiles = document.querySelectorAll('.maze-tile');
const startButton = document.querySelector('.start');
const tile15 = document.querySelector('#fifthteen');

const moveConditions = {
    fifthteen: ['#twenty'],
    twenty: ['#fifthteen','#nineteen'],
    nineteen: ['#twenty','#fourteen'],
    fourteen: ['#nineteen','#nine'],
    nine: ['#fourteen','#ten','#eight'],
    ten: ['#nine'],
    eight: ['#nine','#seven'],
    seven: ['#eight','#six'],
}

function enterTheMaze(startTile) {
    startTile.append(player);
    startButton.remove();
    maze.style.height = '98%';
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
}

startButton.addEventListener('click', () => {
    enterTheMaze(tile15);
});

mazeTiles.forEach((mazeTile) => {
    mazeTile.addEventListener('click', (evt) => {
       move(evt.target);
    })
});

function move(moveToTile) {
    currentTile = player.parentElement.id;
    for(currentTile in moveConditions) {
        if (player.parentElement.id = currentTile) {
            moveToTile.append(player);
        } else {
            console.log('invalid move!')
        }
    }
}
