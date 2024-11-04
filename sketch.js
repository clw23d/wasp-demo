let player, floor;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	world.gravity.y = 20;

	player = new Sprite();
	player.diameter = 50;
	floor = new Sprite(300,400,600,5,'static');
}

function draw() {
	background('skyblue');


	player.speed = 5;
	
	if (kb.pressing('up')) {
		player.direction = -90;
	} else if (kb.pressing('down')) {
		player.direction = 90;
	} else if (kb.pressing('left')) {
		player.direction = 180;
	} else if (kb.pressing('right')) {
		player.direction = 0;
	} else {
	  player.speed = 0;
	}
}
