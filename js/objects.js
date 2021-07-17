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

class Button
{
	constructor(txt, width, height, x = null, y = null)
	{
		this.txt = txt;
		this.height = height;
		this.width = width;

		this.x = x ? x : (canvas.width - this.width) / 2; // center of screen in x axis
		this.y = y ? y : (canvas.height - this.height) / 2; // center of screen in y axis
	}

	draw()
	{
		context.beginPath();
		context.rect(this.x, this.y, this.width, this.height);
		context.fillStyle = '#000';
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = '#fff';
		context.stroke();

		drawText(this.txt, this.x + (this.width / 4), this.y + (this.height / 2), '16px');
	}

	isClicked(p)
	{
		if(
			p.x >= this.x && p.x <= this.x + this.width
			&&
			p.y >= this.y && p.y <= this.y + this.height
			)
			return true;

		return false;
	}
}

var ball; // ball object
var player1; // player 1

var buttonStartVsComputer;
var buttonBackToMenu;