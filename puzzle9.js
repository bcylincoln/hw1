function paintLine(direction, length) {
	var i = 0
	while (i < length) {
		direction()
		setColor("black")
	}
}
paintLine(right, 9)
paintLine(down, 9)
paintLine(left, 9)
paintLine(up, 9)