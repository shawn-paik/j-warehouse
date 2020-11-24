const Load = require('../models/Loads');
const upload = require("../services/ImageUpload");
const singleUpload = upload.single("file");


module.exports = {
	findAll: function(req, res) {
		Load.find(req.query)
			.then(load => res.json(loads))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Load.findById(req.params.id)
			.then(load => res.json(load))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		singleUpload(req, res, function (err) {
			if (err) {
			  return res.json({
				success: false,
				errors: {
				  title: "Image Upload Error",
				  detail: err.message,
				  error: err,
				},
			  });
			}
			let hi = "";
			// Load.create(req.body)
			// 	.then(newLoad => res.json(newLoad))
			// 	.catch(err => res.status(422).json(err));
		});
		let hi = "";
		// let files = req.files
		// let b =  process.env.S3_KEY;
		// let a =  process.env.S3_SECRET;
		// console.log(a);
		// console.log(b);
		// Load.create(req.body)
		// 		.then(newLoad => res.json(newLoad))
		// 		.catch(err => res.status(422).json(err));
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
