const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loadSchema = new Schema({
	supplier: {
		type: String,
		required: true
	},
	files: {
		type: [],
		required: true
    },
    receivedDate:{
        type: Date,
        required: true
    },
    items:{
        type:[],
        requred:true
    },
}, {
    timestamps: true,
  });

const Load = mongoose.model('Load', loadSchema);

module.exports = Load;
