function Defender(myX, myY, myW, myH) {
    this.x = myX;
    this.y = myY;
    this.width = myW;
    this.height = myH;
}

Defender.prototype.drawMe = function() {
    ctx.fillStyle = 'rgb(187,0,0)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

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
barkleyImage.src = './images/barkley.jpg';
var barkley = {
    x: canvas.width / 2,
    y: 550,
    width: 50,
    height: 50,
    drawMe: function() {
        ctx.drawImage(barkleyImage, this.x, this.y, this.width, this.height);
    },
};

var allDefenders = [
    new Defender(100, 100, 50, 50),
    new Defender(300, 150, 50, 50),
    new Defender(200, 250, 50, 50),
    new Defender(50, 75, 50, 50),
    new Defender(350, 250, 50, 50),
];

function updateStuff() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    barkley.drawMe();
    allDefenders.forEach(function(oneDefender) {
        oneDefender.y += 2;
        oneDefender.drawMe();
        
        if (oneDefender.y <= oneDefender.height) {
            oneDefender.y = canvas.height;
        }
    });

    if (defenderCollision()) {
        return;
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
        case 68:
        case 40:
            barkley.y += 5;
            break;
    }
};



// function draw() {
//     var canvas = document.getElementById('myGameArea');
//     var ctx = canvas.getContext('2d');
//     var numSquares = 8;
//     ctx.fillRect(200,525,70,60);

//     for (var n = 0; n < numSquares; n ++){
//         var x = Math.floor((Math.random() * 450) + 1);
//         var y = Math.floor((Math.random() * 450) + 1);
//         var width = 60;
//         var height = 60;
//         //var width = Math.floor((Math.random() * 300) + 100);
//         //var height = Math.floor((Math.random() * 300) + 100);
//         ctx.fillRect(x,y,width,height);
//     }
    
//     }
    
//     draw();
// function drawSquare(xPos, yPos, height, width){

//     context.fillRect(xPos, yPos, 60, 50);
// }




//var barkleyImage = new Image();
//barkleyImage.src = './images/barkley1.jpg'
// var barkley = {
//     x: canvas.width / 2,
//     y: 0,
//     width: 50,
//     height: 60,
//     drawMe: function() {
//         ctx.drawImage(x,y,width,height);
//     },
// };
// var allRectangles = [
//     new Rectangle(200, 100, 50, 50),
//     new Rectangle(250, 100, 50, 50),
//     new Rectangle(250, 100, 50, 50),
// ]



// function draw() {


//     ctx.fillRect(200,525,50,60);

// var allRectangles = [];

//     for (var n = 0; n <=8; n ++) {
//         var x
//         var y
//         while (collision(x, y, allRectangles)) {
//             var x = Math.floor((Math.random()*450) + 1)
//             var y = Math.floor((Math.random()*390) + 1)
//         }
//         var width = 40;
//         var height = 60;
//         ctx.fillRect(x,y,width,height);
//     }



//     // for (var n = 0; n <= 4; n ++) {
//     //     var x = Math.floor((Math.random()*450) + 1);
//     //     var y = Math.floor((Math.random()*400) + 1);
//     //     var width = 40;
//     //     var height = 60;
//     //     ctx.fillRect(x,y,width,height);
//     // }

// }
    
// draw();

//     // for (var n = 0; n <= numSquares; n ++){
//     //     var x = Math.floor((Math.random() * 450) + 1);
//     //     var y = Math.floor((Math.random() * 450) + 1);
//     //     var width = 60;
//     //     var height = 60;
//     //     //var width = Math.floor((Math.random() * 300) + 100);
//     //     //var height = Math.floor((Math.random() * 300) + 100);
//     //     ctx.fillRect(x,y,width,height);
//     // }
    
//     // }
    
//     // draw();


  