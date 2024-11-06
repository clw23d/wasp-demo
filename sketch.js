let player, egg, floor;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	world.gravity.y = 20;

	player = new Sprite();
	player.diameter = 50;

	egg = new Sprite();

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

	if (player.x > 500) {
		camera.x = 750;
	}
}


// i want the camera to scroll to the right when i hit
// the right side of the screen
//so like when player x is 500 move the camera 