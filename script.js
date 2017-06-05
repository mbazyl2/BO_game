var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); // allows to draw on canvas using 2d elements

ctx.beginPath(); // all instructions between ctx.beginPath(); and ctx.closePath();
ctx.rect(20, 40, 50, 50); // defining rectangle -first two parameters define the position of top left corner on the canvas next two => width, heigth.
ctx.fillStyle = "#FF0000"; // defines color of filling
ctx.fill();	// filling
ctx.closePath();