const Load = require('../models/Loads');


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
        const form = new multiparty.Form();
		form.parse(request, async (error, fields, files) => {
			if (error) {
			return response.status(500).send(error);
			};
			try {
				const path = files.file[0].path;
				const buffer = fs.readFileSync(path);
				const type = await FileType.fromBuffer(buffer);
				const fileName = `bucketFolder/${Date.now().toString()}`;
				const data = await uploadFile(buffer, fileName, type);
				return response.status(200).send(data);
			} catch (err) {
				// XMLHttpRequestUpload.
				Load.create(req.body)
				.then(newLoad => res.json(newLoad))
				.catch(err => res.status(422).json(err));
				return response.status(500).send(err);
			}
		})
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
