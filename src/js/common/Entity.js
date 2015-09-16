/*
	This is the Entity class. The idea behind this class is that everything that needs to be drawn
	on a screen should extend this class. Since we are using javascript it should be possible
	to overwrite the default implementation of this file if need be
*/

var namespace = function Entity(pathForSpriteAssest, numberOfFrames, x, y){
	//take care of extending Sprint
	var sprite = new Sprite(pathForSpriteAssest, numberOfFrames);

	var x = x;
	var y = y;

	//draw the Sprite at x, y to the canvas
	var draw = function (){
		p5.prototype.image(this.sprite.currentFrame,this.x,this.y);
	}

	var update = function(){
		this.sprite.updatImage();
	}

	return {
		update: update,
		draw:draw
	};
};