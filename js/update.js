function update()
{
	window.requestAnimationFrame(update);

	if(menu == "game")
	{
		ball.update();

		player1.update();

		if(mode == "vscomputer")
			player2.compute(ball);

		player2.update();		

		if(detectCollision(ball.rect(), player1) || detectCollision(ball.rect(), player2))
		{
			ball.vx *= -1; // change ball direction
		}
	}

	draw();
}
