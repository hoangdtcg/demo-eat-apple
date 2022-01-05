let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");
let startX = (canvas.width/2) - 20;
let startY = canvas.height - 100;

let apples = [];
let player = new Player(startX,startY);
let score = 0;
let hiScore = loadData('hiScore');

let spawnApple = 10;
let timer = 0;
let gameTime = 500;

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

function checkAllCollision() {
    for (let i = 0; i < apples.length; i++) {
        if(checkCollision(player,apples[i])){
            score += apples[i].point;
            apples.splice(i,1);
            i--;
        }
    }
}

function checkCollision(player , apple) {
    let left1 = player.x;
    let right1 = player.x + player.width;
    let top1 = player.y;
    let bottom1 = player.y + player.height;

    let left2 = apple.x - apple.size;
    let right2 = apple.x + apple.size;
    let top2 = apple.y - apple.size;
    let bottom2 = apple.y + apple.size;

    // return !(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2);

    if(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2){
        return false;
    }else {
        return true;
    }
}

window.addEventListener("keydown",movePlayer);

function displayUI() {
    document.getElementById("score").innerText = score;
    document.getElementById("high-score").innerText = hiScore;
}

function saveHighScore() {
    if(score > hiScore){
        saveData("hiScore",score);
    }
}



function main() {
    if(gameTime > 0){
        clearScreen();
        creatApple();
        moveAllApple();
        displayAllApple();
        player.move(canvas);
        player.render(canvas);
        checkAllCollision();
        gameTime--;
        displayUI();

        requestAnimationFrame(main);
    }else {
        saveHighScore();
        alert("Time out");
        window.location.reload();
    }



}
main();
// setInterval(main,1000/60);