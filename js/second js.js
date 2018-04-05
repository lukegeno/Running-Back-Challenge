function startGame() {
    

//     var score=0;
// if (barkley.y <= 30) {
//     score = score + 7;
// } else score = score;


function Defender(myX, myY, myW, myH, mySpeed, image) {
    this.x = myX;
    this.y = myY;
    this.width = myW;
    this.height = myH;
    this.speed = mySpeed;
    this.image = image;
}

var defenderImage = new Image();
    defenderImage.src = './images/osu defender.png'; 

Defender.prototype.drawMe = function() {
    ctx.drawImage(defenderImage, this.x, this.y, this.width, this.height);
    //ctx.fillStyle = 'rgb(187,0,0)';
    //ctx.fillRect(this.x, this.y, this.width, this.height);
};

Defender.prototype.outOfBounds = function() {
    return this.y >= 600;
}


function getTop(obj) {
    return obj.y;
}
function getBottom(obj) {
    return obj.y + obj.height;
}
function getLeft(obj) {
    return obj.x;
}
function getRight(obj) {
    return obj.x + obj.width;
}

function collision(objA, objB) {
    return (
        getBottom(objA) >= getTop(objB) &&
        getTop(objA) <= getBottom(objB) &&
        getRight(objA) >= getLeft(objB) &&
        getLeft(objA) <= getRight(objB)
    );
}

function defenderCollision() {
    var hasCollided = false;

    allDefenders.forEach(function(oneDefender) {
        if (collision(barkley, oneDefender)) {
            hasCollided = true;
    }
});
return hasCollided;
}

var canvas = document.getElementById("myGameArea");
var ctx = canvas.getContext('2d');


var barkleyImage = new Image();
barkleyImage.src = './images/saquon barkley.png';
var barkley = {
    x: canvas.width / 2,
    y: 550,
    width: 50,
    height: 50,
    drawMe: function() {
        ctx.drawImage(barkleyImage, this.x, this.y, this.width, this.height);
    },

};

//dynamically change array over time

var allDefenders = [
    new Defender(100, 100, 30, 30, 2, defenderImage),
    new Defender(300, 150, 30, 30, 2, defenderImage),
    new Defender(200, 250, 30, 30, 2, defenderImage),
    new Defender(50, 75, 30, 30, 2, defenderImage),
    new Defender(350, 250, 30, 30, 2, defenderImage),
];

//know when defender is out of bounds .. method is out of bounds. or function 
//remove defender from array and add new ones.
//add defenders speeds to constructor and oneDefender.y += speed of defender;

function getX() {
var newX = Math.floor(Math.random() * 344)
//while loop until i get a legal x - check all defenders
return newX
};

function randomSpeed() {
    return Math.floor(Math.random() * 5 + 1)
};

console.log(allDefenders);



function updateStuff() {
    if (barkley.y <= 30) {
    ctx.font = "20px Arial";
    ctx.fillText("Touchdown!", canvas.width / 2, canvas.height / 2);
    score += 7;
    return;
    }
    ctx.clearRect(0,0, canvas.width, canvas.height);
    barkley.drawMe();
    allDefenders.forEach(function(oneDefender, i) {
        oneDefender.y += oneDefender.speed;
        console.log(oneDefender.speed);
        oneDefender.drawMe();
        
        // if (oneDefender.y <= oneDefender.height) {
        //     oneDefender.y = canvas.height;
        // }
        if (oneDefender.outOfBounds()) {
        allDefenders.splice(i, 1)
        }
    });
 

// github
    while (allDefenders.length < 5) {
        allDefenders.push(new Defender (getX(),0,30,30,randomSpeed(),defenderImage));
    };

    if (defenderCollision()) {
        ctx.font = "20px Arial";
        ctx.fillText("You were tackled. Next down.", canvas.width/ 2, canvas.height / 2);
        down += 1;
        document.getElementById ("down-id").innerText=down;
        setTimeout (startGame, 3000);
        return;

        //add what happens after tackle. paint it on the canvas. draw a square on the canvas
}

if (down >= 4) {
    alert("Game Over!")

    //Start over button
}

if (score >= 28) {
    alert("Penn State Wins!")

    //next round / play again button
}

    requestAnimationFrame(function() {
        updateStuff();

});
}

updateStuff();

var body = document.querySelector('body');
body.onkeydown = function() {
    if (defenderCollision()) {
        return;
    }
    switch (event.keyCode) {
        case 37:
        case 65:
            barkley.x -= 5;
            break;
        case 87:
        case 38:
            barkley.y -= 5 
            break;
        case 39: 
        case 68:
            barkley.x += 5;
            break;
        case 83:
        case 40:
            barkley.y += 5;
            break;
        //juke left
        case 81:
            barkley.x -= 15;
            break;
        //juke right
        case 69:
            barkley.x += 15;
            break;
        //turbo button
        case 50:
            barkley.y -= 15;
    }
};

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

}

var score = document.querySelector ("#lblScore");
score.innerHTML = 0
var down = 1;



function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+score, 7, 20);
}