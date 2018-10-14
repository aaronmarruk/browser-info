var express = require('express');
var reportController = require('../controllers/api/report');
var pageController = require('../controllers/page');

var router = express.Router();

router.get('/', pageController.index);
router.get('/report/:id', pageController.report);

router.post('/api/v1/report', reportController.create);

module.exports = router;
