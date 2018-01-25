function goDirectionX(direction, x) {
	var i = 0
	while (i < x) {
		i = i +1
		direction()
	}
}

goDirectionX(down, 2)
var col = getColor()
goDirectionX(down, 3)
goDirectionX(right, 2)
setColor(col)
goDirectionX(right, 2)
up()