function onMouseMove(e) {}

function onMouseDown(e)
{
	//console.log(getMousePos(e));

	if(menu == "start")
	{
		b = new Ball("red");
		p1 = new Player("blue");

		menu = "game";
	}
}

function onMouseUp(e) {}
function onMouseOut(e) {}

function getMousePos(e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
        y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
    };
}

function onKeyDown(e)
{
	//console.log(e.keyCode);

	if(menu == "game")
	{
		if(e.keyCode == 38)
			p1.vy = -1 * Math.abs(p1.vy);

		if(e.keyCode == 40)
			p1.vy = Math.abs(p1.vy);
	}
}