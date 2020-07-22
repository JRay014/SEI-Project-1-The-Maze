const player = document.querySelector('.player');
const maze = document.querySelector('.maze');
const mazeTile = document.querySelectorAll('.maze-tile');
const startButton = document.querySelector('.begin');
x.addEventListener('click', y);

function enterTheMaze() {
    const tile10 = document.querySelector('.10');
    tile10.append(player);
    startButton.remove();
    maze.style.height = '98%';
}

function move() {

}
startButton.addEventListener('click', enterTheMaze());
//have player move in each tile of the div.
//every folk causes a click event.