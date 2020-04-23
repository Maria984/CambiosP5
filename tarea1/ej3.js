
var xs = 150;
var ys = 150;
var un = false;
var r = 0;
var g = 0;
var b = 0;


function setup(){
cnv = createCanvas(500,500);
 cnv.position(420,20);

 textSize(50);

}

function draw() {
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
  fill(r,g,b);

 if (keyIsPressed === true) {

 	if (keyCode === UP_ARROW) {
 		un = false;
 	}
 	else if (keyCode === DOWN_ARROW) {
 		un = false;
 	}
 	else if (keyCode === LEFT_ARROW) {
 		un = false;
 	}
 	else if (keyCode === RIGHT_ARROW) {
 		un = false;
 	}
 	else {
 	un = true;
  	rect(mouseX, mouseY, xs, ys);  	
  	un = false;  
		}
	}

	//text(xs,100,100);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    ys -= 10;
  } else if (keyCode === DOWN_ARROW) {
    ys += 10;
  }
  else if (keyCode === LEFT_ARROW){
  	xs -= 10;
  }
  else if (keyCode === RIGHT_ARROW){
  	xs += 10;
  }
 
  return false; // prevent default
}