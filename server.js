const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const multiparty = require('multiparty');

const routes = require('./routes');

const PORT = process.env.PORT || 5000;

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
  
  // create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
// NOTE: if you are using TypeScript the typed function signature will be
// const uploadFile = (buffer: S3.Body, name: string, type: { ext: string; mime: string })
const uploadFile = (buffer, name, type) => {
	const params = {
	  ACL: 'public-read',
	  Body: buffer,
	  Bucket: process.env.S3_BUCKET,
	  ContentType: type.mime,
	  Key: `${name}.${type.ext}`,
	};
	return s3.upload(params).promise();
};
// require db connection
require('./models');

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add this line
app.use(express.static('client/build'));
app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
