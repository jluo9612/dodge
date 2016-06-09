//p5.js has its origin (0, 0) at the upper left corner of the canvas, with the x and y values increasing rightward and downward.

var player;
var playerImage;
var enemy;
var enemyImage;
var enemy1;
var enemyImage1;
var enemyImage2;
var enemyImage3;
var backgroundImage;
var isGameOver;
var monsters;
var randomIndex;
var img;


function preload() {
    playerImage = loadImage("Octocat.png");
    enemyImage = loadImage("Purple-Monster.png");
    enemyImage1 = loadImage("Pink_Monster.png");
    enemyImage2 = loadImage("Monster-33.png")
    enemyImage3 = loadImage("monster22.png")
    backgroundImage = loadImage("bkgd.png");
    monsters = [enemyImage, enemyImage1, enemyImage2, enemyImage3];
}

function getRandomImage(array) {
    randomIndex = Math.floor(Math.random() * array.length);
    img = array[randomIndex];
    return img;
}

function setup() {
    createCanvas(600, 600);
    player = createSprite(width/2, height-50, 50, 50);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 10, 10);
    enemy.addImage(getRandomImage(monsters));
    enemy.rotationSpeed = random(3.0, 8.0);
    isGameOver = false;
}

function draw() {
    background(backgroundImage);
    drawSprites();
    
    if (keyDown(RIGHT_ARROW) && player.position.x < width-55) {
        player.position.x += 7;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 55) {
        player.position.x -= 7;
    }
    if (keyDown(UP_ARROW) && player.position.y > 55) {
        player.position.y -= 7;
    }
    if (keyDown(DOWN_ARROW) && player.position.y < height-55) {
        player.position.y += 7;
    }
    
    enemy.position.y += random(3, 8);
    if (enemy.position.y > height+150) {
        function getRandomImage(array) {
            randomIndex = Math.floor(Math.random() * array.length);
            img = array[randomIndex];
            return img;
    }
        console.log(getRandomImage(monsters));
        enemy.addImage(getRandomImage(monsters));
        enemy.position.y = 0;
        enemy.position.x = random(10, width-10);

    }
    
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        else {
            isGameOver = false;
        }
    }
    
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    textSize(20);
    text("GAME OVER", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/5);
}

function mouseClicked() {
    
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-50;
        enemy.position.x = width/2;
        enemy.position.y = 0;
    }
}