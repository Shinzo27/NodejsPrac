import React from 'react'
import driedFruit1 from '../../assets/driedfruit1.jpg'
import driedFruit2 from '../../assets/driedfruit2.jpg'
import driedFruit3 from '../../assets/driedfruit3.jpg'
import driedFruit4 from '../../assets/driedfruit4.jpg'

import Button from '../Shared/Button'

const productArray = [
  {
    img: driedFruit1,
    name: "Dried Strawberry",
    price: 650
  },
  {
    img: driedFruit2,
    name: "Df2",
    price: 750
  },
  {
    img: driedFruit3,
    name: "Df3",
    price: 950
  },
  {
    img: driedFruit4,
    name: "Df4",
    price: 850
  }
]

const ProductCard = ({ img, ProductName, ProductPrice}) => {
  return (
    <>
      <div className=' w-96 h-44 bg-gray-200 flex items-center justify-between rounded-xl font-Dosis text-gray-600'>
        <div className='flex items-center justify-center flex-col text-xl pl-5'>
          <h1 className='font-semibold'>{ProductName}</h1>
          <h2 className=' font-medium pt-2'>{ProductPrice}</h2>
          <div className='pt-3 pl-4'>
            <Button text={"Add to cart"}/>
          </div>
        </div>
        <div className=' h-28 w-28 mr-4'>
        <img src={img} alt="" className='w-full h-full object-contain rounded-lg'/>
        </div>
      </div>
    </>
  )
}

export default ProductCard