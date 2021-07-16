class Ball
{
	constructor(color, width = 10)
	{
		this.color = color;
		this.width = width;
		this.height = width;

		this.x = canvas.width / 2;
		this.y = canvas.height / 2;

		this.vx = 5;
		this.vy = 5;
	}

	draw()
	{
		context.beginPath();
		context.arc(this.x, this.y, this.width, 0, 2 * Math.PI, false);
		context.fillStyle = this.color;
		context.fill();
	}

	update()
	{
		this.x += this.vx;
		this.y += this.vy;

		if(this.x <= 0 || this.x >= canvas.width)
		{
			this.vx *= -1; // invert velocity/ball direction

			if(this.x <= 0) this.x = 0;
			if(this.x >= canvas.width) this.x = canvas.width;
		}

		if(this.y <= 0 || this.y >= canvas.height)
		{
			this.vy *= -1; // invert velocity/ball direction

			if(this.y <= 0) this.y = 0;
			if(this.y >= canvas.height) this.y = canvas.height;
		}
	}

	rect()
	{
		return { x: this.x - this.height, y: this.y - this.height, width: this.width * 2, height: this.height * 2};
	}
}

class Player
{
	constructor(color, height = 80)
	{
		this.color = color;
		this.height = height;
		this.width = 10;

		this.x = canvas.width - 40;
		this.y = canvas.height / 2;

		this.vx = 0;
		this.vy = 4;
	}

	draw()
	{
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height)
	}

	update()
	{
		//this.x += this.vx;
		this.y += this.vy;

		if(this.y <= 0) this.y = 0;
		if(this.y + this.height >= canvas.height) this.y = canvas.height - this.height;
	}
}

var b; // ball object
var p1; // player 1