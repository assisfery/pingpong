function update()
{
	window.requestAnimationFrame(update);

	if(menu == "game")
	{
		player1.update();
		player2.update();
		ball.update();

		if(detectCollision(ball.rect(), player1) || detectCollision(ball.rect(), player2))
		{
			ball.vx *= -1; // change ball direction
		}
	}

	draw();
}
