var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var laptopSchema = new Schema({
	screenSize: Number,
	hardDriveSize: Number,
	memorySize: Number,
	price: Number
});

mongoose.model('Laptop', laptopSchema);