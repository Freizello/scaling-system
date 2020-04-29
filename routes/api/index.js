const express = require('express'),
      apiController = require('../../controllers/api'),
      router = express.Router();

routePrefix = "/api"

router.all(`${routePrefix}`, apiController.getIndex)

module.exports = router;