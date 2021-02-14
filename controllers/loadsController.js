const Load = require('../models/Loads');

module.exports = {
	findAll: function(req, res) {
		Load.find(req.query)
			.then(loads => res.json(loads))
			.catch(err => {
				res.status(422).json(err)
			});
	},
	findById: function(req, res) {
		Load.findById(req.params.id)
			.then(load => res.json(load))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Load.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(load => res.json(load))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Load.findById({ _id: req.params.id })
			.then(load => load.remove())
			.then(allLoads => res.json(allLoads))
			.catch(err => res.status(422).json(err));
	}
};
