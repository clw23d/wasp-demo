let player, egg, egg2, floor, housewasp, housewoman;
let img;
let points = 0;
let count = 1;
let timer = 60;



function preload() {
}

function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	world.gravity.y = 20;

	player = new Sprite();
	player.diameter = 50;
	player.layer = 2;

	egg = new Sprite(1350,300,10,10,'static');

	// right now its a small square in the top left

	floor = new Sprite(930,400,2000,5,'static');

	doorbell = new Sprite(1300,250,20,20,'static');

	housewasp = new Sprite(350,250,400,300,'static');
	player.overlaps(housewasp);
	housewasp.layer = 1;

	housewoman = new Sprite(1500,250,400,300,'static');
	player.overlaps(housewoman);
	housewoman.layer = 1;

	//img = loadImage("assets/favicon.png");


}


function mouseClicked() {
	count = count + 1;
	if (player.collides(doorbell)) {
		count = 100;
	}
}
// when count goes up by 1, it goes to the next line of dialogue
// wait but thats actaully not what i want at all??
// i just want hitting the doorbell to start the dialogue?
// and then you can just progress by clicking?
// wait maybe i can do that thing about stages for this???

function draw() {

	
	background('skyblue');

	image(img,0,0);

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
		//egg.remove();
		egg.x = random(1300,1700);
		egg.y = random(100,400);
		points = points + 1
	}
// when player overlaps egg, remove the egg and add a point



	print(count);
	if (count == 1) {
		textbox(1,"ugh, it's time to go to work");
	} if (count == 2){ 
		textbox(1,"i'll fly over and ring the doorbell");
	} if (count == 100){
		textbox(2,"Hello, are you the exterminator?");
	} if (count == 101){
		textbox(1,"yep that's me");
	} if (count == 102){
		textbox(2,"Finally, you're here to get rid of these...");
	} if (count == 103){
		textbox(2,"NASTY cockroaches!");
	} if (count == 104){
		textbox(1,"sure thing maam, it'll just take a minute");
	} if (count == 105){
		textbox(1,"(good, just in time to lay my eggs...)");
	} if (count == 106){
		textbox(2,"What was that?");
	} if (count == 107){
		textbox(1,"nothin' maam");
	} if (count == 108){
		textbox(2,"Well, come on in, dear!");
	} if (count == 109){
		textbox(1,"[Find the roach oothecae and lay your eggs...]");
	} if (count == 110){
		textbox(1,"[...to complete the extermination.]");
	} if (count == 111){
		textbox(1,"[When your parisitoid wasp babies hatch...]");
	} if (count == 112){
		textbox(1,"[...they will eat all the roach eggs.]");
	} if (count == 113){
		textbox(1,"[Thats the circle of life!]");
	}



		// Find the cockroach oothecae (egg cases) and lay your eggs in them to complete the extermination
		// (When the ensign wasp babies hatch, they will eat all the unhatched cockroach eggs.)
		// (Thats the circle of life!)

// system that progresses the dialogue
// 1 = wasp
// 2 = human

//hold on i might just have it so the different triggers progress the dialogue to different points
//like on start, set count to 1, set it to 3 when you collect the hat, set it to 4 when you ring doorbell etc
	
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
	text(timer, 20, 20);

	if (frameCount % 60 == 0 && timer > 0) {
		timer --;
	} if (timer == 0) {
		text("finish! your score: points", 20, 20);
	}

}


function textbox(p,t,z){

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



		//aight fuck everything else rn im gonna focus on the egg game
		//set a timer, while the timer is under x, make an egg spawn
		//at a random x and y between these numbers
		//spawn two and make it so when you get it they dissapear
		// and a new one shows up
		// when the timer stops dont spawn any more

		// let timer = 60
		// text(timer, x, y)
		// if (frameCount)

		// how the fuck do i have it start when you click
		// maybe i just have it turn on the display??
		//ah so i just make it a function???

	3