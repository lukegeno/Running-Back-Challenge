//create the canvas

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

//draw barkley

var player = {
    x: 25,
    y: 25,
    moveLeft: function() {this.x -= 25},
    moveRight: function() {this.x += 25},
}

function draw(player) {
    var playerImage = new Image();
    playerImg.onload = function () {
        ctx.drawImage(playerImage,player.x,player.y, 50, 50);
    }
}

//draw defenders



// //add background to canvas. draw background on load

// var background = new Image ();
// background.src = "./images/field.jpg";

// background.onload = function() {
//     ctx.drawImage(background,0,0)
// }

// //create boundaries

// //draw the player

// var player = new Image();
// player.src = "./images/football player.png";
// player.onload = function () {

// };

// var playerX = 0;


// var playerImage = new Image ();
// playerImage.src = "./images/football player.png";
// var player = {
//     x: canvas.width/2,
//     y: 0,
//     height: 100,
//     width: 100,
//     drawMe: function() {
//         ctx.drawImage(playerImage,0,0);
//     }
// }



// //move the player left (x -=) and right (x +=) 

// //draw the defenders/obstacles

// //request defenders animation by decreasing y value

// //end game when....

// //update the canvas







// // function Defender(myX, myY, myW, myH) {
// //     this.x = myX;
// //     this.y = myY;
// //     this.width = myW;
// //     this.height = myH;
// // }

// // Defender.prototype.drawMe = function() {

// // }



// // var playerImage = new Image();
// // playerImage.src = "./images/football player.png";
// // var player = {
// //     x: canvas.width/2,
// //     y: 0,
// // // height and width    
// //     width: 150,
// //     height: 100,
// //     drawMe: function() {
// //         ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
// //     }
// // };

// // var defenderImage = new Image();
// // defenderImage.src = "./images/osu defender.png"; 