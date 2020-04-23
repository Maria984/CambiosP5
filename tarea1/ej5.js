let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyReleased() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  return false; // prevent any default behavior
}