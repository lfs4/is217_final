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

	var laptop = new Laptop

	
	//decorator patterns used to set the latptop options
}