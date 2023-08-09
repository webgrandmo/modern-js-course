class Shape {
	constructor(name) {
		this.name = name;
	}
	logName() {
		console.log(`The name of a shape is ${this.name}`);
	}
}

class Rectangle extends Shape {
	constructor(name, height, width) {
		super(name);
		this.height = height;
		this.width = width;
	}
}

class Circle extends Shape {
	constructor(name, radius) {
		super(name);
		this.radius = radius;
	}
}

const rect = new Rectangle('Rec1', 20, 40);
console.log(rect);
rect.logName();

const circle = new Circle('Circle', 20, 40);
console.log(circle);
circle.logName();
