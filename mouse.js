function onMouseMove(e) {}

function onMouseDown(e)
{
	if(menu == "start")
	{
		alert(123);
	}
}

function onMouseUp(e) {}
function onMouseOut(e) {}

function getMousePosition(e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
        y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
    };
}
