const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const apiGenereate = require('../controllers/generate');

router.get('/hello', apiController.sayHello);

router.get('/generate', apiGenereate.resetData);
router.get('/graphic', apiGenereate.previewTable);

module.exports = router;
