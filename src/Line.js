import * as Point from './Point'

class Line {
    constructor (a = new Point(0, 0), b = new Point (2, 4)) {
    	Object.assign(this, a, b)
    }
}