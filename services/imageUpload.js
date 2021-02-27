const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = new aws.S3();
require('custom-env').env('local');
const {getId} = require('./idHelper');

aws.config.update({
    secretAccessKey: process.env.S3_ACCESS_SECRET,
    accessKeyId: process.env.S3_ACCESS_KEY,
    region: "us-east-1",
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
  };

  


  const storage = multerS3({
    acl: "public-read",
    s3,
    bucket: "joe-new-bucket",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, getId() + "_" +  file.originalname);
    },
  })

  const upload = multer({
    fileFilter,
    storage:storage,
  });

  const multipleUpload =
    multer({
    storage: storage
    });
  
  module.exports = {
    multipleUpload: multipleUpload,
    upload: upload
  };

