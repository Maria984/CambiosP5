var cnv
var p, r, o, g, a, m, c, i, n = '';

function setup() {

 cnv = createCanvas(500,500);
 cnv.position(420,20);

  fill(245, 123, 158);
  textSize(50);
}

function draw() {
  background(200);

  
if (keyIsPressed === true) {
  text(p, 30, 65); 
  text(r, 60,65);
  text(o, 80,65);
  text(g, 110,65);
  text(r, 140,65);
  text(a, 160,65);
  text(m, 190,65);
  text(a, 235,65);
  text(c, 265,65);
  text(i, 295,65);
  text(o, 310,65);
  text(n, 340,65);
  fill(0,255,0);
  rect(70, 100, 50, 50);
 }
 else{
 	text('',33,65);
 	fill(255,0,0);
  	rect(70, 100, 50, 50);
 }

   
  

  

  fill(0, 102, 153);
}
function keyTyped() {
	if (key === 'p') {
		p = 'p';
	}
	else if (key === 'r'){
		r = 'r';
	}
	else if (key === 'o'){
		o = 'o';
	}
	else if (key === 'g'){
		g = 'g';
	}
	else if (key === 'a'){
		a = 'a';
	}
	else if (key === 'm'){
		m = 'm';
	}
	else if (key === 'c'){
		c = 'c';
	}
	else if (key === 'i'){
		i = 'i';
	}
	else if (key === 'n'){
		n = 'n';
	}
	
}


