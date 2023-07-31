class Circle {
	#radius;
	constructor(value) {
		this.#radius = value;
	}

	area() {
		return Math.PI * Math.pow(this.#radius, 2);
	}
}

const circle = new Circle(14);
const area = circle.area();
console.log(area);
