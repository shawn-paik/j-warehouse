const Load = require('../models/Loads');
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req, file, cb)=>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
})


// Defining all methods and business logic for routes

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
		Load.create(req.body)
			.then(newLoad => res.json(newLoad))
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
