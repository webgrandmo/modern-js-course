function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
}

Rectangle.prototype.area = function () {
	return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
	return (this.width + this.height) * 2;
};

Rectangle.prototype.isSquare = function () {
	return this.width === this.height;
};

const rect = new Rectangle('Rect', 10, 10);

console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
console.log(rect);
