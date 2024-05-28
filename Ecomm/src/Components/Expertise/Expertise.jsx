import React from "react";
import foodImg1 from "../../assets/food-img-1.png";
import foodImg2 from "../../assets/food-img-2.png";
import foodImg3 from "../../assets/food-img-3.png";
import Slider from "react-slick";

const heroData = [
  {
    id: 1,
    img: foodImg1,
    title: "Cashew",
    title2: "Cashew is very good for health",
  },
  {
    id: 2,
    img: foodImg2,
    title: "Walnuts",
    title2: "Walnuts is very good for health",
  },
  {
    id: 3,
    img: foodImg3,
    title: "Almonds",
    title2: "Almonds is very good for health",
  },
];

const Expertise = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center pb-8">
          <h1 className="text-4xl font-semibold font-Dosis">Our Expertise!</h1>
        </div>
        <div className="lg:flex lg:items-center lg:justify-center gap-16 font-Dosis font-semibold">
          <div className="p-8 rounded-lg bg-gray-100 text-black">
            <div className="flex justify-center items-center">
              <img src={foodImg1} alt="" className=" w-52 rounded-lg" />
            </div>
            <div className="text-lg text-clip w-60 pt-4 flex justify-center items-center">
              Cashew
            </div>
            <div className="text-md font-medium flex justify-center items-center text-yellow-700">
              ₹670/Kg
            </div>
          </div>
          <div className="p-8 rounded-lg bg-gray-100">
            <div className="flex justify-center items-center">
              <img src={foodImg2} alt="" className="w-52 rounded-lg" />
            </div>
            <div className="text-lg text-clip w-60 pt-4 flex justify-center  items-center">
              Walnuts
            </div>
            <div className="text-md font-medium flex justify-center items-center text-yellow-700">
              ₹670/Kg
            </div>
          </div>
          <div className="p-8 rounded-lg bg-gray-100">
            <div className="flex justify-center items-center">
              <img src={foodImg3} alt="" className="w-52 rounded-lg" />
            </div>
            <div className="text-lg text-clip w-60 pt-4 flex justify-center items-center">
              Almonds
            </div>
            <div className="text-md font-medium flex justify-center items-center text-yellow-700">
              ₹670/Kg
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise
