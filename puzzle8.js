function direction8ThenRightX(direction, x) {
	var i = 0
	while (i < 8) {
		direction()
		i = i + 1
	}
	var j = 0
	while (j < x) {
		right()
		j = j + 1
	}
}
direction8ThenRightX(down, 2)
direction8ThenRightX(up, 2)
direction8ThenRightX(down, 2)
direction8ThenRightX(up, 2)
direction8ThenRightX(down, 1)