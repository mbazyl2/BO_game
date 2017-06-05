var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); // allows to draw on canvas using 2d elements

ctx.beginPath(); // all instructions between ctx.beginPath(); and ctx.closePath();
ctx.rect(20, 40, 50, 50); // defining rectangle -first two parameters define the position of top left corner on the canvas next two => width, heigth.
ctx.fillStyle = "#FF0000"; // defines color of filling
ctx.fill();	// filling
ctx.closePath();

ctx.beginPath(); // again beignPath and closePath
ctx.arc(240, 160 , 20 , 0, Math.PI*2, false); // first two parameters are postion of circle center, second one is radius, 0 and Math.PI*2 are start and end angle in radians, false is clockwise direction of drwaing.
ctx.fillStyle = "green"; // defining color
ctx.fill();	// filling circle
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0,0,255, 0.5)";
ctx.stroke();
ctx.closePath();