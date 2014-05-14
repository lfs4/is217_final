var assert = require("chai").assert;

var laptopObj = require('../models/laptopObj.js');


var laptop = new laptopObj(1000, 15, 256, 8);
describe("Laptop", function () {
	it("it should make a laptop of specified price", function(){
		assert.equal(laptop.price, 1000);
	});
	it("it should make a laptop with specified screen size", function(){
		assert.equal(laptop.screenSize, 15);
	});
	it("it should make a laptop with specified hard drive space", function(){
		assert.equal(laptop.hardDriveSize, 256);
	});
	it("it should make a laptop with specified ram", function(){
		assert.equal(laptop.memorySize, 8);
	});

})
