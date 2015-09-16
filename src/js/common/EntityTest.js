/*
	this is a test file for Sprtie
*/

var filepath = ["/res/player/test/sprite_test", ".png"];
var entity;

function setup(){
	createCanvas(720, 480);
	frameRate(60);
	entity = new namespace(filepath, 5, 360, 240);
}

function draw(){
	// image(sprite.currentImage,720/2,480/2);
	entity.draw();
	update();
}

function update(){
	// sprite.updateImage();
	entity.update();
}