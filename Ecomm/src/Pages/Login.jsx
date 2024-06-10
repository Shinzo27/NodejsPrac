import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import sidePhoto from '../assets/undraw_login_re_4vu2.svg'
import Button from '../Components/Shared/Button'

const Login = () => {
  return (
    <>
        <Navbar/>
          <div className=' container pt-10'>
            <div className='flex items-center justify-center'>
              <div className='bg-blue-400  rounded-lg flex justify-around items-center w-full p-14'>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className=' text-3xl text-white font-semibold'>Login Here</h1>
                  <div className='flex justify-center items-center mt-10'>
                    <input type='text' className='rounded-md p-2 placeholder:text-gray-400' placeholder='First Name'/>
                  </div>
                  <div className='flex justify-center items-center mt-10'>
                    <input type='text' className='rounded-md p-2 placeholder:text-gray-400' placeholder='Last Name'/>
                  </div>
                  <div className='flex justify-center items-center mt-10'>
                    <input type='text' className='rounded-md p-2 placeholder:text-gray-400'placeholder='Email'/>
                  </div>
                  <div className='flex justify-center items-center mt-10'>
                    <input type='text' className='rounded-md p-2 placeholder:text-gray-400' placeholder='Password'/>
                  </div>
                  <div className='pt-7'>
                  <Button text={"Login"}/>
                  </div>
                </div>
                <div className=''>
                  <img src={sidePhoto} alt="" className='w-full h-full object-contain' />
                </div>
              </div>
            </div>
          </div>
        <Footer/>
    </>
  )
}

export default Login