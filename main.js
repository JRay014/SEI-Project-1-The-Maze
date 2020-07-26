const player = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const mazeTiles = document.querySelectorAll('.maze-tile');
const startButton = document.querySelector('.start');
const tile15 = document.querySelector('#fifthteen');

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
       console.log(evt.target);
    })
});

function move(moveToTile) {
    currentTile = player.parentElement.id;
    console.log(currentTile);
    console.log(moveToTile.id);
    Object.keys(moveConditions).forEach((key) => {
        // console.log('key', key);
        Object.values(moveConditions).forEach((value) => {
            // console.log('value', value);
            if (currentTile == key) {
                for(let i=0; i < value.length; i++) {
                    console.log(key[i])
                if (moveToTile.id == value) {
                moveToTile.append(player);
                }
            }
            } else {
                // console.log('invalid move!')
        }
        });
    })
}
// Object.keys(moveConditions).forEach((key) => {
//     console.log(key, moveConditions[key]);
// });
// Object.values(moveConditions).forEach((value) => {
//     console.log(value);
// });