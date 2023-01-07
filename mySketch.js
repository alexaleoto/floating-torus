function setup() {
  createCanvas(1275, 575, WEBGL);
		background(10,10); // black background
  frameRate(35);
}

function draw() {
	fill(0, 0, 250); // blue fill color
	translate(frameCount * 0.3, 0.04);// centering of screen
  rotateX(frameCount * 0.02); // rotate the torus around the x-axis
  rotateY(frameCount * 0.01); // rotate the torus around the y-axis
	rotateZ(frameCount * 0.03); // rotate the torus around the z-axis
  torus(100, 25); // draw a torus with a radius of 100 and a tube radius of 25
}
