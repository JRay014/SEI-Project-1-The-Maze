const player = document.querySelector('.player');
const board = document.querySelector('body');
const maze = document.querySelector('.maze');
const mazeTiles = document.querySelectorAll('.maze-tile');
const startButton = document.querySelector('.start');
const tile15 = document.querySelector('#fifthteen');
const tile6 = document.querySelector('#six');
const tile8 = document.querySelector('#eight');
const tile9 = document.querySelector('#nine');
const tile10 = document.querySelector('#ten');
const tile14 = document.querySelector('#fourteen');
const tile19 = document.querySelector('#nineteen');
const tile20 = document.querySelector('#twenty');

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

function enterTheMaze() {
//startTile
    // const tile15 = document.querySelector('#fifthteen');
    // const startButton = document.querySelector('.start');
    // const maze = document.querySelector('.maze');
    tile15.append(player);
    startButton.remove();
    maze.style.height = '98%';
    // player.style.
    // console.log("it works")
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset Maze';
    board.append(resetButton);
    mazeTiles.forEach((mazeTile) => {
        mazeTile.addEventListener('click', (evt) => {
           move(evt.target); 
        })
    // evt.target = moveTo;
    // return moveTo;
    });
}

function move(tile) {
    currentTile = player.parentElement;
    // console.log(tile.id);
    // console.log(player.parentElement);
    // console.log(player.parentElement.id);
    if (player.parentElement.id = moveConditions) {
        tile.append(player);
    } else {

    }
    // for(tile in moveConditions) {
    //     if (currentTile == tile) {
    //         moveTo(moveConditions[tile]);
    //     }
    // }
    // if (tile15.children.includes(player) == true) {
}


function win() {
    if(player.parentElement = tile6) {
        alert('You made it out of the Maze!');
        reset();
    }
    //target eventlistener to tile 6
}

function reset() {
    
}

// if (player.parentElement = tile15) {
//         console.log('yes')
//     }


startButton.addEventListener('click', enterTheMaze);

// x.addEventListener('click', move());
//have player move in each tile of the div.
// every folk causes a click event.