const router = require('express').Router();
const loadsController = require('../controllers/loadsController');
const  {upload , multipleUpload} = require("../services/ImageUpload");
const {getId} = require("../services/idHelper");
const Load = require('../models/Loads');

router
	.route('/')
	.get(loadsController.findAll)
	// .post(upload.single("file"),function(req, res,next) {
	.post(multipleUpload.array("filesCollection"),function(req, res,next) {
		let load = {
			supplier:req.body.supplier,
			comments:req.body.comments,
			receivedDate: req.body.receivedDate,
			// files:[req.file.location]
		}
		let files = []
		for (var i = 0; i<req.files.length; i++){
			files.push({
				location: req.files[i].location,
				fileName: req.files[i].originalname
			});
		}
		load.files = files;
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
