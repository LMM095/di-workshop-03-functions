function setup() { //The setup function is used to define initial environment properties such declaring the canvas size, fonts and other media
  createCanvas(400, 400) //This function sets up the size of the display area
  background(255, 0, 0) //This assigns a background colour to the display
}

// This function instructs the program to produce a square, with the x & y coordinates decalred as well as the length/width of the square
function square(x, y, size) { //The square function declares the x & y coordinates as well as the length/width of the square (there is only 1 size variable because a square has equal length/width)
  rect(x, y, size, size) //The rect function creates a rectangle with (x, y coordinates and the width, length)
}

function roof(x, y, size) { //This function produces the roof of the house. Each x/y coordinate determining the location of each point of the roof
  triangle(x, y, x + size / 2, y - 30, x + size, y)
}

// This function instructs the program to produce a square, with the x & y coordinates decalred as well as the length/width of the square
function house(x, y, size) { //The square function declares the x & y coordinates as well as the length/width of the square (there is only 1 size variable because a square has equal length/width)
  square(x, y, size) //The rect function creates a rectangle with (x, y coordinates and the width, length)
  roof(x, y, size) 
}

function draw() {
  background(255, 0, 0)
  house(mouseX, mouseY, 80)
  fill(255, 130, 0) //This instructs the program to fill the functions below with rbg colurs 255, 130 and 0.
  stroke(0) //This produces a stroke to the assigned functions
}