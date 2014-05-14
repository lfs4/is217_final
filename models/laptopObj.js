
// constructor for laptop objects
var makeLaptop = function (price, screenSize, hardDriveSize, memorySize) {
	var newLaptop = {};

	this.price = price;
	this.screenSize = screenSize;
	this.hardDriveSize = hardDriveSize;
	this.memorySize = memorySize;

	newLaptop = {price: this.price, screenSize: this.screenSize,
					hardDriveSize: this.hardDriveSize, memorySize: this.memorySize};
};

module.exports = exports = makeLaptop;