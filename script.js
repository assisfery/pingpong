var canvas;
var context;

var menu = "start";

window.onload = function()
{
	console.log("starting...");

	canvas = document.querySelector("#screen");
	context = canvas.getContext("2d");

	update();
}

function update()
{
	window.requestAnimationFrame(update);
	draw();
}

function draw()
{
	if(menu == "start")
	{
		context.fillStyle = "#fff";
        context.font = "32px Verdana";
        context.fillText("PingPong", 13, 50);
	}
}