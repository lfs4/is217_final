var mongoose = require('mongoose'),
Laptop = mongoose.model('Laptop');
var laptopObj = require('../models/laptopObj.js');
exports.showOrders = function(req, res){
	Laptop.find({price: {$gte: 1000}}, function(err, laptops){
		var results = [];

		for(var i = 0; i < laptops.length; i++ )
		{
			// var laptop = new laptopObj();

			// constructor pattern that makes a laptop object from retrieved data
			var laptop = new laptopObj(laptops[i].price,laptops[i].screenSize,laptops[i].hardDriveSize, laptops[i].memorySize);
			
			//decorator pattern, addes specs to laptop
			laptop.showSpecs = function(){
				return "Hard Drive: " + this.hardDriveSize + "GB, ScreenSize: " + this.screenSize + "inch, MemorySize: " + this.memorySize + "GB";
			}
			results.push(laptop);
			//console.log(laptop);
		}
		
		res.render('checkout', {title: 'Your Orders', orders: results});
	});
}