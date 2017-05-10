var itemModel = require("../models/items.js")
var orderModel = require("../models/order.js")
var ObjectId = require('mongoose').Types.ObjectId;

// 
exports.index = function(req,res) {
	res.send("DASTI API RUNNING");
}

// GET items collection from database
exports.getItems= function(req, res) {
	itemModel.Item
	.find({})
	.exec(function(err,result) {

		if(err) {
			console.log(err);
		} else {
			res.send(result);
		}
	})
}

// GET order collection from database
exports.getOrder= function(req, res) {
	orderModel.Order
	.find({})
	.exec(function(err,result) {

		if(err) {
			console.log(err);
		} else {
			res.send(result);
		}
	})
}

// POST - add a new order to the order database
exports.saveOrder = function(req,res) {
	console.out(req.body)
	var order = new orderModel.Order(req.body);
	order.save(function(err, response) {
		if (err) {
			console.log(err);
		} else {
			res.sendStatus(200);
		}
	});
}

// POST - add a new item to the item database
exports.saveItem = function(req,res) {
	console.log(req.body);
	var item = new itemModel.Item(req.body);
	item.save(function(err, response) {
		if (err) {
			console.log(err);
		} else {
			res.sendStatus(200);
		}
	});
}

// DELETE an item from the items collection in the database
exports.deleteItem = function(req, res)
{
	itemModel.Item
	.find({"_id":ObjectId(req.body.itemId)})
	.remove()
	.exec(function(err,result) {

		if(err) {
			console.log(err);
		} else {
			res.send(result);
		}
	})
}

// DELETE an item from the order collection in the database
exports.deleteOrder = function(req, res)
{
	orderModel.Order
	.find({"_id":ObjectId(req.body.orderId)})
	.remove()
	.exec(function(err,result) {

		if(err) {
			// console.log(err);
		} else {
			res.send(result);
		}
	})
}