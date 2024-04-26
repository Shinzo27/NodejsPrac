import React from 'react'

const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who are we</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid veniam minima nulla aut rem! Eligendi, modi? Eos maiores rerum, illo voluptate sunt alias voluptatem ratione? Eveniet fugiat recusandae vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex, quo mollitia natus necessitatibus dolorem velit officiis sit qui ullam, quos dignissimos minima adipisci voluptas!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt officiis amet!
        </p>
        <p>
          Lorem, ipsum dolor.
        </p>
      </div>
    </div>
  )
}

export default Biography
