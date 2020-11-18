const Load = require('../models/Loads');
// const fs = require('fs');
// const aws = require('aws-sdk');

// let s3 = new aws.S3({
//   accessKeyId: process.env.S3_KEY,
//   secretAccessKey: process.env.S3_SECRET
// });

// const uploadFile = (fileName) => {
//     // Read content from the file
//     const fileContent = fs.readFileSync(fileName);

//     // Setting up S3 upload parameters
//     const params = {
//         Bucket: "joe-new-bucket",
//         Key: 'cat.jpg', // File name you want to save as in S3
//         Body: fileContent
//     };

//     // Uploading files to the bucket
//     s3.upload(params, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(`File uploaded successfully. ${data.Location}`);
//     });
// };

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
		// let files = req.files
		let b =  process.env.S3_KEY;
  		let a =  process.env.S3_SECRET;
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
