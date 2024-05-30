import React from 'react'
import blogImg1 from '../../assets/blog-img-1.jpg'
import blogImg2 from '../../assets/blog-img-2.jpg'
import blogImg3 from '../../assets/blog-img-3.jpeg'
import blogImg4 from '../../assets/blog-img-6.jpg'

const Reviews = () => {
  return (
    <>
      <div className='container pt-16 sm:p-5'>
        <div className=''>
          <div className='flex justify-center items-center'>
            <h1 className=' text-3xl font-semibold font-Dosis'>Reviews</h1>
          </div>
          <div className='lg:flex lg:items-center lg:justify-center gap-10'>
            <div className='flex items-center justify-center gap-16 font-Dosis pt-8'>
              <div className="p-8 rounded-lg bg-gray-300 text-black">
                <div className="flex justify-center items-center">
                  <img src={blogImg1} alt="" className=" w-80 rounded-lg" />
                </div>
                <div className="text-lg pt-4 flex justify-center items-center">
                  Customer Name
                </div>
                <div className="text-md text-clip w-80 font-medium flex justify-center items-center text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic voluptates labore quod perferendis dolores nobis veniam, praesentium quaerat quam, libero dolorem temporibus nihil natus facere deleniti nam excepturi modi.
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-16 font-Dosis pt-8'>
              <div className="p-8 rounded-lg bg-gray-300 text-black">
                <div className="flex justify-center items-center w-80">
                  <img src={blogImg4} alt="" className=" w-80 rounded-lg" />
                </div>
                <div className="text-lg pt-4 flex justify-center items-center">
                  Customer Name
                </div>
                <div className="text-md text-clip w-80 font-medium flex justify-center items-center text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic voluptates labore quod perferendis dolores nobis veniam, praesentium quaerat quam, libero dolorem temporibus nihil natus facere deleniti nam excepturi modi.
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-16 font-Dosis pt-8'>
              <div className="p-8 rounded-lg bg-gray-300 text-black">
                <div className="flex justify-center items-center w-80">
                  <img src={blogImg3} alt="" className="rounded-lg object-fill"/>
                </div>
                <div className="text-lg pt-4 flex justify-center items-center">
                  Customer Name
                </div>
                <div className="text-md text-clip w-80 font-medium flex justify-center items-center text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic voluptates labore quod perferendis dolores nobis veniam, praesentium quaerat quam, libero dolorem temporibus nihil natus facere deleniti nam excepturi modi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews