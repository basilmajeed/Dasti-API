var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var itemSchema = new mongoose.Schema({
  name : String,
  type : String,
  price : Number,
  rating : Number,
});

var Item = mongoose.model('Item', itemSchema);

module.exports = {
    Item: Item
};