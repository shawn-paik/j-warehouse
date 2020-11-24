const router = require('express').Router();
const loadsController = require('../controllers/loadsController');
const upload = require("../services/ImageUpload");
const singleUpload = upload.single("file");
router
	.route('/')
	.get(loadsController.findAll)
	.post(upload.single("file"),function(req, res,next) {
		
		let hi = "";
		// let files = req.files
		// let b =  process.env.S3_KEY;
		// let a =  process.env.S3_SECRET;
		// console.log(a);
		// console.log(b);
		// Load.create(req.body)
		// 		.then(newLoad => res.json(newLoad))
		// 		.catch(err => res.status(422).json(err));
	});

router
	.route('/:id')
	.get(loadsController.findById)
	.put(loadsController.update)
	.delete(loadsController.remove);

module.exports = router;
