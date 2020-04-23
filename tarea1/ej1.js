var imagen1
var imagen2
var imagen4
var imagen = [];
var final 
var cnv

function preload() //Todo lo que sea cargar imagenes, fuentes, audios
{
  imagen1 = loadImage('assets/ojo1.jpg');
  imagen2 = loadImage ('assets/ojo2.jpg');
  imagen4 = loadImage('assets/ojo3.jpg');
}

function setup() {
  cnv = createCanvas(180,180);
 cnv.position(420,20);
  imagen = [imagen1, imagen2];
  //final = random(imagen);  
}

function draw() {
	for (let i = 0; i < 100; i++) {
  	final = random(imagen);
	}

  if (keyIsPressed === true) {

    image(final, 0,0);
 
  } else {
    image(imagen4, 0, 0);
  }
 // rect(25, 25, 50, 50);
 // image(imagen1, 0,0);
}
