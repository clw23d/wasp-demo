let player, egg, floor;
let img;
let points = 0;
let count = 0;

function preload() {
}

function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	world.gravity.y = 20;

	player = new Sprite();
	player.diameter = 50;

	egg = new Sprite(10,10,10,10,'static');

	floor = new Sprite(300,400,600,5,'static');

}

function mouseClicked() {
	count = count + 1;
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

	camera.x = player.x;

	text(`points: ${points}`, 20, 20);

	if (player.overlaps(egg)) {
		egg.remove();
		points = points + 1
	}



	print(count);
	if (count == 1) {
		textbox("hello there gamers welcome to my minceraft lets play",250,430);
	} if (count == 2){ 
		textbox("i am a dwarf and im digging a hole diggy diggy hole",10,460);
	}
	
	
}



function textbox(s,x,y) {
	rect(
		x-5,
		y-12,
		textWidth(s)+10,
		20,
		5,5,5,5
	)
	text(s,x,y);
	
}

// ok so i want it to be when you get to a certain spot
// the dialog pops up
// and you click to progress the dialogue
// and you cant move forward until the dialogue is done
// i also want it to be up or down based on who talks first
// so let me logic this out
// when you click, y = y plus 10
// but no because im going to have to call it every time
// Ok it might be easeir if i just have the textbox in the same place
// and make it clear after i call it
// he did it so it appears for a certain ammount of frames
// but i want it to appear until you click again
// i cant find the fucking command im going insane
// did i make a sketch that 
// hold on
// ok with the square i didnt remove it i just moved it
// see if it was a sprite i could just say egg remove
//booleans!!!!!
// why the fuck isnt this working