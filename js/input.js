function onMouseMove(e) {}

function onMouseDown(e)
{
	//console.log(getMousePos(e));

	if(menu == "start")
	{
		ball = new Ball("red");
		player1 = new Player("blue");

		if(buttonStartVsComputer.isClicked(getMousePos(e)))
		{
			menu = "game";
		}
	}

	if(menu == "game")
	{
		if(buttonBackToMenu.isClicked(getMousePos(e)))
		{
			menu = "start";
		}
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
			player1.vy = -1 * Math.abs(player1.vy);

		if(e.keyCode == 40)
			player1.vy = Math.abs(player1.vy);
	}
}