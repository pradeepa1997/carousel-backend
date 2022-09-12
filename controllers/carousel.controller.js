const Carousel = require("../models/carousel.model");

class CarouselController {
    async getCarousel(req, res) {
        const slides = req.query.slides ? req.query.slides : 10;
        let carousels = await Carousel.find(
            {},
            {},
            {limit: parseInt(slides)}
        ).exec();
        res.status(200).send({
            status:true,
            slides: carousels
        });
    }
    createCarousel(req, res) {
        
        const newCarousel= new Carousel();
        newCarousel.image = req.body.image;
        newCarousel.title = req.body.title;
        newCarousel.subTitle = req.body.subTitle;
        newCarousel.save().then(data => {
            res.status(200).send({
                data: {},
                status: true,
                message: "Successfully Registered\nCheck your email for confirmation."
            });
        }).catch(err => {
            console.log(err)
            res.send({
                status: false,
                message: "Something Went Wrong",
                error: {}
            });
        });
    }
}

const dummyArray = [
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    },
    {
        "image": "https://images.unsplash.com/photo-1662974555921-70df2c78f639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "title": "Strong mask",
        "subTitle": "Secondary text"
    }
]


module.exports = new CarouselController();