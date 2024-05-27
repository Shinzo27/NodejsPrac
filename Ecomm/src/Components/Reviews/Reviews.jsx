import React from 'react'
import blogImg1 from '../../assets/blog-img-1.jpg'
import blogImg2 from '../../assets/blog-img-2.jpg'
import blogImg3 from '../../assets/blog-img-3.jpeg'
import blogImg4 from '../../assets/blog-img-6.jpg'

const Reviews = () => {
  return (
    <>
      <div className='container pt-16'>
        <div className=''>
          <div className='flex justify-center items-center'>
            <h1 className=' text-3xl font-semibold font-Dosis'>Reviews</h1>
          </div>
          <div className='flex items-center justify-center gap-16 font-Dosis pt-8'>
            <div className="p-8 rounded-lg bg-gray-100 text-black">
              <div className="flex justify-center items-center">
                <img src={blogImg1} alt="" className=" w-72 rounded-lg" />
              </div>
              <div className="text-lg text-clip w-60 pt-4 flex justify-center items-center">
                Lorem, ipsum dolor.
              </div>
              <div className="text-md font-medium flex justify-center items-center text-yellow-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, harum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews