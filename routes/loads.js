const router = require('express').Router();
const loadsController = require('../controllers/loadsController');

router
	.route('/')
	.get(loadsController.findAll)
	.post(loadsController.create);

router
	.route('/:id')
	.get(loadsController.findById)
	.put(loadsController.update)
	.delete(loadsController.remove);

module.exports = router;
