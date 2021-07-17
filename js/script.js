var canvas;
var context;

var menu = "start"; // start / game
var mode = "vscomputer"// vscomputer / vsplayer

window.onload = function()
{
	//console.log("starting...");

	canvas = document.querySelector("#screen");
	context = canvas.getContext("2d");

	canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseout", onMouseOut);
    window.addEventListener('keydown', onKeyDown, false);

	buttonStartVsComputer = new Button("Vs Computer", 200, 40, null, 100);
	buttonStartVsPlayer = new Button("Vs Player", 200, 40, null, 160);

	buttonBackToMenu = new Button("Back", 80, 30, 10, 10);

	update();
}
