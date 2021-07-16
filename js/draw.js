function draw()
{
	context.clearRect(0, 0, canvas.width, canvas.height);

	if(menu == "start")
	{
		drawText("PingPong", textCenter("PingPong"), 40);
	}

	if(menu == "game")
	{
		p1.draw();
		b.draw();
	}

}
