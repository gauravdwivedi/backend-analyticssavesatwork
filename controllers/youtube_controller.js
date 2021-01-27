const Youtube = require('../model/youtube');
const fs = require('fs');
const path = require('path');

module.exports.youtube = async function (req, res) {
  const data = await Youtube.create(req.body);
      Youtube.up
};
