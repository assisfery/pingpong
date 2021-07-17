function update()
{
	window.requestAnimationFrame(update);

	if(menu == "game")
	{
		player1.update();
		ball.update();

		if(detectCollision(ball.rect(), player1))
		{
			ball.vx *= -1; // change ball direction
		}
	}

	draw();
}
