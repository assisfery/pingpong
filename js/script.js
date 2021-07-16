var canvas;
var context;
var menu = "start";

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

	update();
}
