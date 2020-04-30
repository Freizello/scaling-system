const express = require('express'),
      webController = require('../../controllers/web'),
      router = express.Router();

router.get('/', webController.getIndex)
router.get('/:urlId', webController.getFullUrl)

module.exports = router;