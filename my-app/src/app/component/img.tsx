"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./imgSlide";

const Prom = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/img1.jpg",
            title: "Amazing Product 1",
            mainTitle: "Best Offer",
            price: "150",
        },
        {
            id: 1,
            img: "/img2.jpg",
            title: "Amazing Product 2",
            mainTitle: "Limited Deal",
            price: "150",
        }
    ];

    return (
        <div className="container pt-6 lg:pt-0 w-full overflow-hidden">
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Prom;
