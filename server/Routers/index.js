const express = require('express');
const router = express.Router();
const { getReviews } = require('../controller/index');

router.get('/reviews/', getReviews)


module.exports = router;