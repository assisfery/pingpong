function draw()
{
	context.clearRect(0, 0, canvas.width, canvas.height);

	if(menu == "start")
	{
		drawText("PingPong", textCenter("PingPong", 32), 40);
		buttonStartVsComputer.draw();
	}

	if(menu == "game")
	{
		player1.draw();
		ball.draw();
		buttonBackToMenu.draw();
	}

}
