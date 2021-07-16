function update()
{
	window.requestAnimationFrame(update);

	if(menu == "game")
	{
		p1.update();
		b.update();
	}

	draw();
}
