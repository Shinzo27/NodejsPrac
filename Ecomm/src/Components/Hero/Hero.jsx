import React from "react";
import Slider from "react-slick";

const heroData = [
    {
        id:1,
        img: Image1,
        subtitle: "Healthy Dryfruit",
        title: "Wealty",
        title2: "Life",
    },
    {
        id:2,
        img: Image1,
        subtitle: "Need Spices?",
        title: "We Have",
        title2: "It Too!",
    },
    {
        id:3,
        img: Image1,
        subtitle: "Morning Breakfast?",
        title: "Have A",
        title2: "Namkeen!",
    },
]

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  };
  return (
    <div>
        <div className="w-full">
            <Slider {...settings}>
                <div className="w-full">
                    <h1>1</h1>
                </div>
                <div className="w-full">
                    <h1>2</h1>
                </div>
                <div className="w-full">
                    <h1>3</h1>
                </div>
                <div className="w-full">
                    <h1>4</h1>
                </div>
                <div className="w-full">
                    <h1>5</h1>
                </div>
                <div className="w-full">
                    <h1>6</h1>
                </div>
            </Slider>
        </div>
    </div>
  );
};

export default Hero;
