var col = [255, 255, 255];
var bx = 400;
var by = 100;
var boxSizeX = 700;
var boxSizeY = 200;
let overBox = false;
let locked = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  stroke(0);
	fill(255);
	rect(bx,by,boxSizeX,boxSizeY);
}

function draw() {
	
	colorMode(HSB, 360,100,100);
	centerX = 200;
	centerY = 200;
	beginShape(TRIANGLE_FAN);
  vertex(200,200);
	radius = 50;
	noStroke();
  for(var angle =0; angle <= 360; angle+=36){
      var vx = centerX + cos(radians(angle))* radius;
      var vy = centerY + sin(radians(angle))* radius;
      vertex(vx, vy);
      fill(angle, 100, 100);
  }
  endShape();
	
	colorMode(RGB);
 	
	if ( mouseX > bx  && mouseX < bx + boxSizeX && mouseY > by  && mouseY < by + boxSizeY ) {
    overBox = true;
	} 
	else {
    overBox = false;
  }
	
}

function mousePressed() {
	if (!overBox) {
		col = get(mouseX, mouseY);
		//print(col);
	}
}


function mouseDragged() {
	if (overBox == true) {
		fill(col);
		rect(mouseX,mouseY,5,5);
	}
}
