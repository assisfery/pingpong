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