console.log('Moving mouse circles<');


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 

function draw() {

  background(126);
  
 
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;
  let iy = height - mouseY;

  fill(255,150);
  ellipse(x, height/2, y, y);
 
  fill (0, 150);
  ellipse(ix, height/2, iy, iy);
  
  
}

