const express = require('express'),
      apiController = require('../../controllers/api'),
      router = express.Router();

// baseroute = /api
router.get('/', apiController.getIndex)
router.post(`/new`, apiController.createUrl)

module.exports = router;