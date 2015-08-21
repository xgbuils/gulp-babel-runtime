class Point {
	constructor (x = 0, y = 0) {
		Object.assign(this, {x, y})
	}
	toString () {
		return '(${this.x},${this.y})'
	}
}

export default Point