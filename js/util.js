function drawText(txt, x, y, size = '32px', font = 'Verdana', color = '#fff')
{
	context.fillStyle = color;
	context.font = size + " " + font;
	context.fillText(txt, x, y);
}

function textCenter(txt)
{
	var textWidth = context.measureText(txt).width;
	return (canvas.width/2) - (textWidth/2);
}

function detectCollision(rect1, rect2)
{
	if
	(
		rect1.x + rect1.width >= rect2.x && rect1.x <= rect2.x + rect2.width
		&&
		rect1.y + rect1.height >= rect2.y && rect1.y <= rect2.y + rect2.height
	)
		return true;

	return false;
}