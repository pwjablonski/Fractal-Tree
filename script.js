const canvas = document.getElementById("myCanvas");
const swayController = document.querySelector('#swayController');

const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
ctx.translate(200, 400);

var min = -10;
var max = 10;
swayController.type = "range";
swayController.min = min;
swayController.max = max;
swayController.value = 0;

swayController.oninput = function() {
    ctx.clearRect(-200, 0, 400, -400);
    drawBranch(0,0, 60, Math.PI / 2 , 5);
};


function drawBranch(x, y, length, angle, thickness) {

    var newX = x - Math.cos(angle) * length; 
    var newY = y - Math.sin(angle) * length;
    
    ctx.beginPath();
    ctx.lineWidth = thickness;
    ctx.moveTo(x, y);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    
    if(length < 7){
        return null;
    }
    
    var sway = swayController.value / 100;
    
    drawBranch(newX, newY, length * .8 , angle + Math.PI/7 + sway, thickness * .8);
    drawBranch(newX, newY, length * .8 , angle - Math.PI/7 + sway, thickness * .8);
    
}


drawBranch(0,0, 60, Math.PI/2, 5);