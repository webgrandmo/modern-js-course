function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;

	this.area = function () {
		return this.width * this.height;
	};
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 120, 140);
console.log(rect2.area());
