let player, egg, floor;
let img;
let points = 0;
let count = 0;
let doorbellx = 30;
let doorbelly = 30;

function preload() {
}

function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	world.gravity.y = 20;

	player = new Sprite();
	player.diameter = 50;

	egg = new Sprite(10,10,10,10,'static');

	// right now its a small square in the top left

	floor = new Sprite(300,400,600,5,'static');

	doorbell = new Sprite(doorbellx,doorbelly,20,20,'static');

	// ideally when i interact with it, it starts dialogue with the homeowner

}

function mouseClicked() {
	print(player.x - doorbell.x);
	if (player.collides(doorbell)) {
		count = count + 1;
	}
}
// when count goes up by 1, it goes to the next line of dialogue
// wait but thats actaully not what i want at all??
// i just want hitting the doorbell to start the dialogue?
// and then you can just progress by clicking?
// wait maybe i can do that thing about stages for this???

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
// movement system

	camera.x = player.x;

	if (points > 0){
		text(`points: ${points}`, 20, 20);
	}
//shows how many eggs you've collected

	if (player.overlaps(egg)) {
		egg.remove();
		points = points + 1
	}
// when player overlaps egg, remove the egg and add a point



	print(count);
	if (count == 1) {
		textbox(1,"dialogue 1");
	} if (count == 2){ 
		textbox(2,"dialogue 2");
	}
// system that progresses the dialogue
	
/*
	rectMode(CENTER);
	
	fill(0);
	rect(250,450,400,60,5,5,5,5);

	textSize(50);
	text("🐝", 80, 470)

	textAlign(CENTER);
	fill(255,204,0);
	textSize(16);
	text("wwwwwwwwwwwwwwwwwwwwwwwwwwwwww",280,455);

*/

}


function textbox(p,t){

	rectMode(CENTER);

	fill(0);
	rect(250,450,400,60,5,5,5,5);
	
	textSize(50);
	if (p == 1) {
		text("🐝", 80, 470);
	} else if (p == 2) {
		text("👵", 80, 470);
	}

	textAlign(CENTER);
	fill(255,204,0);
	textSize(16);
	text(t,280,455);


}

//function textbox(s,x,y) {
//	rect(
//		x-5,
//		y-12,
//		textWidth(s)+10,
//		20,
//		5,5,5,5
//	)
//	text(s,x,y);
	
//}
// textbox size


// times i want dialogue to appear:
	// when you first start the game:
		// wasp: "ugh, its time to go to work"
		// wasp: "i better grab my hat first"
				// code to swap sprite when you overlap the hat
					// "EQUIPED HAT"
					// wasp: "wç"
	// when you leave the room (when x is far enough to the right)
		// "i'll fly over to the house and ring the doorbell"
	// when you press the doorbell
			// woman: "hello, is this the exterminator?"
			// wasp: "yep thats me"
			// woman: "finally, you're here!"
			// woman "ive been waiting for you to get rid of these..."
			// "... nasty cockroaches!" // a shake effect would be great
			// wasp: "well thats what i'm here for, maam"
			// wasp: ("and just in time to lay my eggs...")
			// woman: "what was that?"
			// wasp: "nothing, maam"
			// woman: "well, come on in, dear"
	// when you enter the house
		// Find the cockroach oothecae (egg cases) and lay your eggs in them to complete the extermination
		// (When the ensign wasp babies hatch, they will eat all the unhatched cockroach eggs.)
		// (Thats the circle of life!)
	// when enough eggs are collected (or when the timer is up?)
		// wasp: "that should be all of them."
	// when you leave the house (is the woman standing by the door? idk)
		// wasp: "well maam, you should see the number of cockroaches decrease soon."
		// woman: "thank you dear, you've been such a great help!"
		// "maybe next time you can help me with those dreadfull wasps in my backyard!"
		// music cuts out or something
		// "oh i just hate wasps, they're so scary, and they just sting for no reason!"
		// "there's not one good thing about them!"
		// wasp: "um. maybe they're just trying to protect their hive, maam."
		// "and most kinds of wasps aren't even capable of stinging. 
		// "stingers are modified ovipositors, y'see, and parisitiod wasps use--"
		// woman: "if didn't know any better, i'd say you were a wasp."
		// "maybe i should go grab my bug spray and find out." // bold or something
		// "ha ha!"
		// wasp: "..."
		// "have a good day maam."
	// when you get home and go to bed
		// "i helped her out with her pest problem, but she.."
		// "i just don't get it."
		// "i hope my children make it out of that house alive."

		// ok so im gonna try the stages thing
		// no first i need dialogue to progress
