const Order = require('../models/Orders');

module.exports = {
	findAll: function(req, res) {
		Order.find(req.query)
			.then(orders => res.json(orders))
			.catch(err => {
				res.status(422).json(err)
			});
	},
	findById: function(req, res) {
		Order.findById(req.params.id)
			.then(order => res.json(order))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Order.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(order => res.json(order))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Order.findById({ _id: req.params.id })
			.then(order => order.remove())
			.then(allOrders => res.json(allOrders))
			.catch(err => res.status(422).json(err));
	}
};
