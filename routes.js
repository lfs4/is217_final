module.exports = function(app)
{
	var store = require('./controllers/store');
	var checkout = require('./controllers/checkout');


	app.get('/', store.laptop);
	app.post('/', store.makeOrder);

	app.get('/checkout', checkout.showOrders);
}