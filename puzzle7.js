function goDirectionX(direction, x) {
	var i = 0
	while (i < x) {
		i = i +1
		direction()
	}
}

function directionUntilRedThenRightX(direction, x) {
	while (getColor() != "red") {
		direction()
	}
	var i = 0
	while (i < x) {
		right()
		i++
	}
}
directionUntilRedThenRightX(down, 2)
directionUntilRedThenRightX(up, 2)
directionUntilRedThenRightX(down, 2)
directionUntilRedThenRightX(up, 2)
directionUntilRedThenRightX(down, 1)