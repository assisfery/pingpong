function onMouseMove(e) {}

function onMouseDown(e)
{
	//console.log(getMousePos(e));

	if(menu == "start")
	{
		b = new Ball("red", 10);

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
	console.log(e.keyCode);
}