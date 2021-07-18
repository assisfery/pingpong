function draw()
{
	context.clearRect(0, 0, canvas.width, canvas.height);

	if(menu == "start")
	{
		drawText("PingPong", textCenter("PingPong", 32), 40);
		buttonStartVsComputer.draw();
		buttonStartVsPlayer.draw();
	}

	if(menu == "game")
	{
		player1.draw();
		player2.draw();
		ball.draw();
		buttonBackToMenu.draw();

		drawText("press up or down", canvas.width - 100, canvas.height - 20, '10px');

		if(mode == "vsplayer")
			drawText("press w or s", 20, canvas.height - 20, '10px');

		drawText(player1.points, canvas.width - 20, canvas.height - 40, '10px');
		drawText(player2.points, 20, canvas.height - 40, '10px');
	}

}
