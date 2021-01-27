const express = require('express');

const router = express.Router();

const youtubeController = require('../../../controllers/youtube_controller');

router.post('/submit', youtubeController.youtube);

module.exports = router;
