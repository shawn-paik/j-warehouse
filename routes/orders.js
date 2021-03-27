const router = require('express').Router();
const ordersController = require('../controllers/ordersController');
const  {upload , multipleUpload} = require("../services/ImageUpload");
const {getId} = require("../services/idHelper");
const Order = require('../models/Orders');

router
	.route('/')
	.get(ordersController.findAll)
	// .post(upload.single("file"),function(req, res,next) {
	.post(multipleUpload.array("filesCollection"),function(req, res,next) {
		let order = {
			supplier:req.body.supplier,
			comments:req.body.comments,
			orderDate: req.body.orderDate,
			// files:[req.file.location]
		}
		let files = []
		for (var i = 0; i<req.files.length; i++){
			files.push({
				location: req.files[i].location,
				fileName: req.files[i].originalname
			});
		}
		order.files = files;
		Order.create(order)
				.then(newOrder => res.json(newOrder))
				.catch(err => {
					res.status(422).json(err)
				});
	});

router
	.route('/:id')
	.get(ordersController.findById)
	.put(ordersController.update)
	.delete(ordersController.remove);

module.exports = router;
