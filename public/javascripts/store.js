$(document).ready(function(){
	var screenPrice = 0;
	var hardDrivePrice = 0;
	var memoryPrice = 0;

	updatePrice();

	$("input[name='screenSize']").on('change', function(){
		var sOpt = $('input[name=screenSize]:checked', '#orderForm').val();
		
		if(sOpt == 15)
			screenPrice = 200;
		else if(sOpt == 11)
			screenPrice = 0;

		updatePrice();
	});
	$("input[name='hardDriveSize']").on('change', function(){
		var hdOpt = $('input[name=hardDriveSize]:checked', '#orderForm').val(); 
		if(hdOpt == 256)
			hardDrivePrice = 200;
		else
			hardDrivePrice = 0;
		
		updatePrice();
	});
	$("input[name='memorySize']").on('change', function(){
		var memOpt = $('input[name=memorySize]:checked', '#orderForm').val(); 
		if(memOpt == 16)
			memoryPrice = 200;
		else
			memoryPrice = 0;

		updatePrice();
	});
	function updatePrice(){
			var totalPrice = 1000 + screenPrice + hardDrivePrice + memoryPrice;
			var price = "$" + totalPrice;
		$("#totalPrice").val(totalPrice);
		$("#price").html(price) ;
	}
});
	

