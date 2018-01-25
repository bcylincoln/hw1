function goDirectionX(direction, x) {
	var i = 0
	while (i < x) {
		i = i +1
		direction()
	}
}

goDirectionX(down, 6)
goDirectionX(right, 3)
goDirectionX(up, 2)
goDirectionX(right, 3)
goDirectionX(down, 3)

