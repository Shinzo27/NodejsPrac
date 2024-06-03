import React from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'
import driedFruit1 from '../assets/driedfruit1.jpg'
import driedFruit2 from '../assets/driedfruit2.jpg'
import driedFruit3 from '../assets/driedfruit3.jpg'
import driedFruit4 from '../assets/driedfruit4.jpg'

const productArray = [
  {
    img: driedFruit1,
    name: "Df1",
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

const Product = () => {
  return (
    <>
      <div className='container'>
        <div className=' w-full h-16 bg-blue-400 flex items-center justify-center text-white rounded-xl'>
          <h1 className='text-3xl'>Category Name</h1>
        </div>
        <div className=' p-5 flex justify-center items-center gap-5'>
          {
            productArray.map((product)=>(
              <div>
                <ProductCard img={product.img} ProductName={product.name} ProductPrice={product.price}/>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Product