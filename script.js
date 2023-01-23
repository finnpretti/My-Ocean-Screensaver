const numBubbles = 60; // there will be 50 bubbles
let bubbles = []; // this will store all the bubbles

let fishImages; //array for fish images
const numFish = 20; //there will be 20 fish
let fishes = []; //this will store all of the fish objects
let fishTimer = 0;

let oceanscene; // declaring a variable that will hold background image
let nameFont; //name font


function preload() {
  oceanscene = loadImage("oceanscene.jpg");
  nameFont = loadFont("PassionOne-Black.ttf");
  fish1 = loadImage("Fish/fish1.png");
  fish2 = loadImage("Fish/fish2.png");
  fish3 = loadImage("Fish/fish3.png");
  fish4 = loadImage("Fish/fish4.png");
  fish5 = loadImage("Fish/fish5.png");
  fish6 = loadImage("Fish/fish6.png");
  fish7 = loadImage("Fish/fish7.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bgscene = createGraphics(width, height); // the background layer with the background scene
  bgscene.image(oceanscene, 0, 0, width, height);
  for (let index = 0; index < numBubbles; index++) { // makes 50 random bubbles
    let bubble = {
      x: random(width), // random x and y coordinates
      y: random(height),
      diameter: random([10, 15, 20, 25, 30]) // random diameter among these five numbers
    }
    bubbles.push(bubble); // puts the circle into the array
  }
  buildFishArray(); //build Fish array for the first time
}


function draw() {
  background(255);
  image(bgscene, 0, 0); // puts image in background again

  //draw my name
  //textFont(nameFont, 50); // we can put the font size here instead of using textSize()
  //fill(255, 255, 255); // makes the text white
  //textAlign(RIGHT, BOTTOM);
  //text("By: Finn Pretti", width - 25, height - 25);

  if (fishTimer == 5000) { //after some time, build a new array of fish for variety
    fishes.splice(0, fishes.length); //empty the array
    buildFishArray(); //rebuild the array
    fishTimer = 0; //reset the timer
  }
  drawFish();
  fishTimer++;
  drawBubbles();
}


function drawBubbles() {
  strokeWeight(2);
  stroke(0, 191, 255);
  noFill();
  for (let bubble of bubbles) { // goes through each of the 50 circles
    ellipse(bubble.x, bubble.y, bubble.diameter);
    bubble.y--; // decreases the y coordinate so that it looks like the bubble is floating up
    if (bubble.y + bubble.diameter / 2 < 0) { // when the bubble gets to the top, it goes back to the button
      bubble.y = height + 50;
    }
  }
}

function buildFishArray() {
  for (let index = 0; index < numFish; index++) { //makes 20 random fish
    let fish = {
      y: random(height),
      x: random(width),
      fishType: random([fish1, fish2, fish3, fish4, fish5, fish6, fish7])
    }
    fishes.push(fish); //puts the fish into the array
  }
}


function drawFish() {
  for (let fish of fishes) {
    image(fish.fishType, fish.x, fish.y, 100, 70);
    fish.x++; //increases x coordinate so it looks like fish are swimming
    if (fish.x > width + 100) {
      fish.x = -100;
    }
  }
}


