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
    // <div className='flex justify-center items-center'>
    //   <Slider {...settings}>
    //             {
    //                 heroData.map((data)=>(
    //                     <div key={data.id}>
    //                         <div className="grid grid-cols-1 sm:grid-cols-2">
    //                             <div className="flex flex-col justify-center pt-12 gap-4 sm:pl-3 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
    //                                 <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold">{data.title}</h1>
    //                                 <h1 className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
    //                             </div>
    //                             <div className="order-1 sm:order-2">
    //                                 <div>
    //                                     <img src={data.img} alt="image1" className="w-[400px] sm:w-[450px] h-[400px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))
    //             }
    //         </Slider>
    // </div>
    <>
    </>
  )
}

export default Expertise