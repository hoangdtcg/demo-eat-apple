let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");
let startX = (canvas.width/2) - 20;
let startY = canvas.height - 60;

let apples = [];
let player = new Player(startX,startY)

let spawnApple = 10;
let timer = 0;

function creatApple() {
    timer++;
    if(timer > spawnApple){
        let x = randomNumber(0, canvas.width)
        let y = randomNumber(-5,-15)
        let apple = new Apple(x,y);
        apples.push(apple);
        timer = 0;
    }

}

function displayAllApple() {
    for (let i = 0; i < apples.length; i++) {
        apples[i].render(canvas);
    }
}

function moveAllApple() {
    for (let i = 0; i < apples.length; i++) {
        apples[i].dropDown();
    }
}

function clearScreen() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function randomNumber(min, max) {
    let rand = Math.floor(Math.random()*(max-min)) + min;
    return rand;
}

function movePlayer(evt) {
    switch (evt.key) {
        case "a":
            player.dir = "left";
            // player.moveLeft();
            break;
        case "d":
            // player.moveRight();
            player.dir = "right";
            break;
        default:
            player.dir = "";
    }
}

window.addEventListener("keydown",movePlayer);

function main() {
    clearScreen();
    creatApple();
    moveAllApple();
    displayAllApple();
    player.move(canvas);
    player.render(canvas);
    requestAnimationFrame(main)
}
main();
// setInterval(main,1000/60);