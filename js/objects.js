class Ball
{
	constructor(color, size)
	{
		this.color = color;
		this.size = size;

		this.x = canvas.width / 2;
		this.y = canvas.height / 2;

		this.vx = 5;
		this.vy = 5;
	}

	draw()
	{
		context.beginPath();
		context.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		context.fillStyle = this.color;
		context.fill();
	}

	update()
	{
		this.x += this.vx;
		this.y += this.vy;

		if(this.x < 0 || this.x > canvas.width)
			this.vx *= -1; // invert velocity direction

		if(this.y < 0 || this.y > canvas.height)
			this.vy *= -1; // invert velocity direction
	}
}

var b;