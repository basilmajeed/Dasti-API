var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var orderSchema = new mongoose.Schema({
  names : [],
  prices: []
});

var Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order: Order
};