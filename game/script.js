var canvas, ctx;


var canvas = document.getElementById("one");
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = "#FF1C0A";
ctx.fillStyle = "#FF1C0A";
ctx.moveTo(80, 0); // pick up "pen," reposition at 500 (horiz), 0 (vert)
ctx.lineTo(50, 50); // draw straight down by 200px (200 + 200)
ctx.lineTo(110, 50); // draw up toward left (100 less than 300, so left)
ctx.closePath(); // connect end to start
ctx.stroke(); // outl
ctx.fill();

var c = document.getElementById("two");
var ctx = c.getContext("2d");
ctx.fillStyle = "#8A2BE2";
ctx.beginPath();
ctx.arc(30, 30, 30, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();

var canvas = document.getElementById("three");
var context = canvas.getContext('2d');

context.beginPath();
context.rect(25, 25, 50, 50);
context.fillStyle = '#00FFFF';
ctx.strokeStyle = "#FF1C0A";
context.fill();
context.stroke();

var canvas = document.getElementById("four");
var ctx = canvas.getContext('2d');



ctx.beginPath();
ctx.strokeStyle = "#FF1C0A";
ctx.fillStyle = "#FF1C0A";
ctx.moveTo(80, 0); // pick up "pen," reposition at 500 (horiz), 0 (vert)
ctx.lineTo(50, 50); // draw straight down by 200px (200 + 200)
ctx.lineTo(110, 50); // draw up toward left (100 less than 300, so left)
ctx.closePath(); // connect end to start
ctx.stroke(); // outl
ctx.fill();


var ciecleCanvas = document.querySelector('#five');

var circleCtx = ciecleCanvas.getContext("2d");
circleCtx.fillStyle = "#8A2BE2";
circleCtx.beginPath();
circleCtx.arc(30, 30, 30, 0, Math.PI * 2, true);
circleCtx.closePath();
circleCtx.fill();

var myCanvas = document.getElementById("six");
var ctx = myCanvas.getContext("2d");



ctx.beginPath()
ctx.moveTo(25, 0);
ctx.lineTo(50, 40);
ctx.lineTo(25, 75);
ctx.lineTo(0, 40);
ctx.lineWidth = 0;
ctx.fillStyle = "#00008B";
ctx.strokeStyle = "#00008B";
ctx.closePath();
ctx.fill();
ctx.stroke();


var c = document.getElementById("seven");
var ctx = c.getContext("2d");

ctx.beginPath()
ctx.moveTo(25, 0);
ctx.lineTo(50, 40);
ctx.lineTo(25, 75);
ctx.lineTo(0, 40);
ctx.lineWidth = 0;
ctx.fillStyle = "#00008B";
ctx.strokeStyle = "#00008B";
ctx.closePath();
ctx.fill();
ctx.stroke();




var myCanvas = document.getElementById("eight");
var ctx = myCanvas.getContext("2d");

ctx.beginPath();
ctx.rect(25, 25, 50, 50);
ctx.fillStyle = '#00FFFF';
ctx.strokeStyle = "#FF1C0A";
ctx.fill();
ctx.stroke();

