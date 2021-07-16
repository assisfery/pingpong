function update()
{
	window.requestAnimationFrame(update);

	if(menu == "game")
	{
		b.update();
	}

	draw();
}
