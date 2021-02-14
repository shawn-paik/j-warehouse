const router = require('express').Router();
const loadsController = require('../controllers/loadsController');
const  {upload , multipleUpload} = require("../services/ImageUpload");
const Load = require('../models/Loads');

router
	.route('/')
	.get(loadsController.findAll)
	// .post(upload.single("file"),function(req, res,next) {
	.post(multipleUpload.array("files"),function(req, res,next) {
		
		const load = {
			supplier:req.body.supplier,
			comments:req.body.comments,
			receivedDate: req.body.receivedDate,
			files:[req.file.location]
		}
		Load.create(load)
				.then(newLoad => res.json(newLoad))
				.catch(err => res.status(422).json(err));
	});

router
	.route('/:id')
	.get(loadsController.findById)
	.put(loadsController.update)
	.delete(loadsController.remove);

module.exports = router;
