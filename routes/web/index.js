const express = require('express'),
      webController = require('../../controllers/web'),
      router = express.Router();

routePrefix = "/"

router.all(`${routePrefix}`, webController.getIndex)

module.exports = router;