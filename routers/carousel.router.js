const express = require('express');
const router = express.Router();

const carouselController = require('../controllers/carousel.controller')

router.get("", carouselController.getCarousel);
router.post("", carouselController.createCarousel);

module.exports = router;