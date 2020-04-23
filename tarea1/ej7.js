var x = 100;
var y = 100;
var vel = 1;
var uv = false;
var nave

function setup() {
  createCanvas(1024, 1024);
  fill(255, 0, 0);
  nave = loadImage('assets/nave.png');
  textSize(50);
}

function draw() {

  
  if (keyIsDown(LEFT_ARROW)) {          
    x -= 5 * vel;
   
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5 * vel;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5 * vel;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5 * vel;
  }

  clear();
 image(nave, x, y, 100 ,70);
  
}
function keyTyped() {
  if (uv === false){
    if (key === 'x') {
      vel = 2;
      uv = true;
    }
  }
  if (uv === true){
    if (key === 'v'){
      vel = 1;
    uv = false;
    }
  }  
    
}