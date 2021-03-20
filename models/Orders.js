const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
  supplier: {
		type: String,
		required: true
  },
  comments: {
    type: String, 
    required: true,
  },
  files: {
		type: [],
		required: true
  },
  orderDate:{
        type: Date,
        required: true
  },
  items:[{
    fileName: String,
    location: String
  }],

}, {
    timestamps: true,
  });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
