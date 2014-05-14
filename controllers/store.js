var mongoose = require('mongoose'),
Laptop = mongoose.model('Laptop');

exports.laptop = function(req, res){
	res.render('store', {title: 'Laptop Options'});
}

exports.makeOrder = function(req, res){
	var screenSize = req.body['screenSize'];
	var hardDriveSize = req.body['hardDriveSize'];
	var memorySize = req.body['memorySize'];
	var price = req.body['totalPrice'];

	var laptop = new Laptop({
		price: price,
		screenSize: screenSize,
		hardDriveSize: hardDriveSize,
		memorySize: memorySize
	})
    laptop.save(function(err,laptops){
        if(err) return console.error(err);
    });
	// latptop.setScreenSize = function(screenSize){
	// 	this.screenSize = screenSize;
	// }
	// latptop.setHardDriveSize = function(hardDriveSize){
	// 	this.hardDriveSize = hardDriveSize;
	// }
	// laptop.setMemorySize = function(memorySize){
	// 	this.memorySize = memorySize;
	// }
	// laptop.setPrice = function(price){
	// 	this.price = price;
	// }
	// laptop.Specs = function(){

	// }

	console.log("added laptop: " + laptop);
	res.render('store', {title: "Thank you for your purchase"});
	//decorator patterns used to set the latptop options
}