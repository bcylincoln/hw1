
function doActionX(action, x) {
	var i = 0;
	while (i < x) {
		action()
		i++
	}
}



function colorPixel(currX, currY, newX, newY) {
	var relX = newX - currX;
	var relY = newY - currY;
	if (relX > 0) {
		doActionX(right, relX);

	} else {
		doActionX(left, Math.abs(relX));
	}

	if (relY > 0) {
		doActionX(up, relY)
	} else {
		doActionX(down, Math.abs(relY))
	}
	setColor("red")
}

function radians(degrees) {
	return degrees * (Math.PI / 180);
}

function circle(centerX, centerY, radius) {
	doActionX(right, centerX)
	doActionX(down, centerY)

	var angle = 0;
	var currX = 0;
	var currY = 0;
	while(angle < 360) {
		var x = Math.round(radius * Math.cos(radians(angle)))
		var y = Math.round(radius * Math.sin(radians(angle)))
		colorPixel(currX, currY, x, y);
		currX = x;
		currY = y;
		angle += 5;
	}
		
}

circle(50, 50, 20);




