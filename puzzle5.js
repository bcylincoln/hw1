function goDirectionX(direction, x) {
	var i = 0
	while (i < x) {
		i = i +1
		direction()
	}
}

function pattern2() {
	goDirectionX(right, 2)
	if (getColor() == "blue") {
		down()
	} else {
		up()
	}
}
var i = 0
while (i < 3) {
	i++
	pattern2()
}
goDirectionX(right, 3)