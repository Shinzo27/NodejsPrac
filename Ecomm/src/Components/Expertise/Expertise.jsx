import React from 'react'
import foodImg1 from '../../assets/food-img-1.png'
import foodImg2 from '../../assets/food-img-2.png'
import foodImg3 from '../../assets/food-img-3.png'
import Slider from "react-slick";

const heroData = [
  {
      id:1,
      img: foodImg1,
      title: "Cashew",
      title2: "Cashew is very good for health",
  },
  {
      id:2,
      img: foodImg2,
      title: "Walnuts",
      title2: "Walnuts is very good for health",
  },
  {
      id:3,
      img: foodImg3,
      title: "Almonds",
      title2: "Almonds is very good for health",
  },
]

const Expertise = () => {
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
    <>
        <div>
            <div>
                <img src={foodImg1} alt="" />
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit iure qui provident quam, natus voluptate?
            </div>
        </div>
    </>
  )
}

export default Expertise