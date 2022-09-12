const express = require('express');
const Carousel = require('./carousel.router');

const router = express.Router();

router.use('/api/carousel', Carousel);

module.exports = router;