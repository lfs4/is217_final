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
	});

/*	laptop.updateScreenSize = function(screenSize){
		this.screenSize = screenSize;
		console.log("screenSize: " + this.screenSize);
	}

	laptop.screenSize(screenSize);*/
/*		
	})*/
    laptop.save(function(err,laptops){
        if(err) return console.error(err);
    });

	console.log("added laptop: " + laptop);
	res.render('store', {title: "Thank you for your purchase"});
	//decorator patterns used to set the latptop options
}