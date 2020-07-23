const player = document.querySelector('.player');
// const maze = document.querySelector('.maze');
// const mazeTile = document.querySelectorAll('.maze-tile');
const startButton = document.querySelector('.start');

function enterTheMaze() {
    const tile10 = document.querySelector('#fifthteen');
    // const startButton = document.querySelector('.start');
    const maze = document.querySelector('.maze');
    tile10.append(player);
    startButton.remove();
    maze.style.height = '98%';
    // player.style.
    // console.log("it works")
}

function move() {
    
}

function win() {
    if(player) {}
    //target eventlistener to tile 6
}

startButton.addEventListener('click', enterTheMaze);

// x.addEventListener('click', move());
//have player move in each tile of the div.
//every folk causes a click event.