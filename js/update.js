function update()
{
	window.requestAnimationFrame(update);

	if(menu == "game")
	{
		p1.update();
		b.update();

		if(detectCollision(b.rect(), p1))
		{
			b.vx *= -1; // change ball direction
		}
	}

	draw();
}
