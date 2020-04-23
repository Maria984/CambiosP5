var cnv
var r
var g
var b

var rgb

var txt = '';

function preload() 
{
  r = loadImage('assets/rr.jpg');
  g = loadImage ('assets/gg.jpg');
  b = loadImage ('assets/bb.jpg');
  rgb = loadImage('assets/rgb.jpg');
}

function setup() {
	cnv = createCanvas(304,304);
	cnv.position(520,20);  
	textSize(20);
}

function draw() {  
  //image (rgb, 50,20);
  text ('RGB', 48, 250);
  fill(0,0,0);
}
function keyTyped() {
  if (key === 'r') {
    image (r, 50,20);
  } else if (key === 'g') {
    image (g, 50,20);
  }
 else if (key === 'b') {
    image (b, 50,20);
  }
  else {
  	image (rgb, 50,20);
  }
  return false;
}