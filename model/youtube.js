const mongoose = require('mongoose');
const { Schema } = mongoose;
const multer = require('multer');
const path = require('path');
const THUMBNAIL_PATH = path.join('/uploads/youtube/thumbnail');

const youtubeSchema = new Schema(
  {
    songname: {
      type: String,
      required: true,
    },
    artistname: {
      type: String,
      required: true,
    },
    youtubelink: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', THUMBNAIL_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + '-' + Date.now());
  },
});

youtubeSchema.statics.uploadedThumbnail = multer({
  storage: storage,
}).single('thumbnail');

const Youtube = mongoose.model('Youtube', youtubeSchema);

module.exports = Youtube;
