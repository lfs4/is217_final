var mongoose = require('mongoose'),
Laptop = mongoose.model('Laptop');

exports.showOrders = function(req, res){
	Laptop.find({price: {$gte: 1000}}, function(err, laptops){
		console.log("laptops" + laptops);
		res.render('checkout', {title: 'Your Orders', orders: laptops});
	});
}