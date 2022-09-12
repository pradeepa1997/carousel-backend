const mongoose = require('mongoose');


const carouselSchema = mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
});
const Carousel = mongoose.model('carousel', carouselSchema);
module.exports=Carousel;