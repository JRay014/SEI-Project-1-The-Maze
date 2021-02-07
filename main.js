const player = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const mazeTiles = document.querySelectorAll('.maze-tile');
const startButton = document.querySelector('.start');
const resetButton = document.createElement('button');
const tile15 = document.querySelector('#fifthteen');
const tile6 = document.querySelector('#six');

// const moveConditions = {
//     fifthteen: ['twenty'],
//     twenty: ['fifthteen','nineteen'],
//     nineteen: ['twenty','eightteen', 'twentyfour'],
//     eightteen: ['nineteen','thirteen','seventeen'],
//     thirteen: ['eightteen','fourteen'],
//     fourteen: ['thirteen','nine'],
//     nine: ['fourteen','ten',],
//     ten: ['nine','five'],
//     five: ['ten','four'],
//     four: ['five','three'],
//     three: ['four','eight'],
//     eight: ['three','seven'],
//     seven: ['eight','twelve','two'],
//     twelve: ['seven','eleven'],
//     eleven: ['twelve','six'],
//     six: ['eleven'],
//     twentyfour: ['nineteen','twentythree','twentyfive'],
//     twentyfive: ['twentyfour'],
//     twentythree: ['twentyfour','twentytwo'],
//     twentytwo: ['twentythree','twentyone'],
//     twentyone: ['twentytwo','sixteen'],
//     sixteen: ['twentyone'],
//     seventeen: ['eightteen'],
//     two: ['seven','one'],
//     one: ['two'],
// }

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
    for (let i = 0; i < moveConditions[currentTile].length; i++) {
        // console.log("Test: ", moveConditions[currentTile][i]);
        if (moveConditions[currentTile][i] == moveToTile.id) {
          moveToTile.append(player);
        } 
    }
    if (moveToTile.id == 'six') {
        alert('You made it out of the Maze!');
        reset();
    }
}

function reset() {
    board.append(player);
    resetButton.remove();
    board.append(startButton);
}

resetButton.addEventListener('click', reset)

// function win() {
//     // if(player.parentElement == tile6) {
//         alert('You made it out of the Maze!');
//         reset();
//     // }
// }


