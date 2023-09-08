import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryItems = () => {
  const categoryItems = [
    {
      _id: 1,
      text: 'Hoodies',
      image: '/hoodies_images/IMG_1622.JPG',
    },
    {
      _id: 2,
      text: 'Tees',
      image: '/tee_images/IMG_0898.JPG',
    },
    {
      _id: 3,
      text: 'Knitwears',
      image: '/knitwear_images/IMG_1964.JPG',
    },
    {
      _id: 4,
      text: 'Tshirts',
      image: '/tshirt_images/IMG_1628.JPG',
    },
    {
      _id: 5,
      text: 'Caps',
      image: '/cap_images/IMG_1621.JPG',
    },
    {
      _id: 6,
      text: 'Footwears',
      image: '/footwear_images/IMG_1623.JPG',
    },
    {
      _id: 7,
      text: 'Sets',
      image: '/sets_images/IMG_2093.JPG',
    },
    {
      _id: 8,
      text: 'Pants',
      image: '/pant_images/IMG_1627.JPG',
    },
    {
      _id: 9,
      text: 'Shorts',
      image: '/shorts_images/IMG_1619.JPG',
    },
  ]
  return (
    <>
      <div className='custom-margin'>
        {categoryItems.map((categoryItem) => (
          <div
            key={categoryItem._id}
            xs={6}
            md={4}
            className='position-relative row'>
            <Link to={`/categoryItems/${categoryItem.text}/page/1`}>
              <Image
                src={categoryItem.image}
                className='img-fluid component-images darker'
              />
            </Link>

            <div className='position-absolute top-50 start-50 translate-middle text-center'>
              <Link
                to={`/categoryItems/${categoryItem.text}/page/1`}
                style={{ textDecoration: 'none' }}>
                <h3 className='text-light'>{categoryItem.text}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryItems
