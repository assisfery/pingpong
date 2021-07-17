function onMouseMove(e) {}

function onMouseDown(e)
{
	//console.log(getMousePos(e));

	if(menu == "start")
	{
		ball = new Ball("red");
		player1 = new Player("blue");
		player2 = new Player("green");
		player2.x = 40;

		if(buttonStartVsComputer.isClicked(getMousePos(e)))
		{
			menu = "game";
			mode = "vscomputer";
		}

		if(buttonStartVsPlayer.isClicked(getMousePos(e)))
		{
			menu = "game";
			mode = "vsplayer";
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
			player1.goUp();

		if(e.keyCode == 40)
			player1.goDown();

		if(mode == "vsplayer")
		{
			if(e.keyCode == 87)
				player2.goUp();

			if(e.keyCode == 83)
				player2.goDown();
		}
	}
}