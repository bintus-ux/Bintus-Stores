import React from 'react'
import { Carousel, Col, Row, Image, Container } from 'react-bootstrap'
import { categoryItem } from '../products_folder/products_2'

const CategoryItems = ({ categoryItem }) => {
  return (
    <>
      <div className='custom-margin'>
        {categoryItem.map((category) => (
          <div xs={6} md={4} className='position-relative'>
            <Image
              src={category.image}
              className='img-fluid component-images darker'
            />
            <div className='position-absolute top-50 start-50 translate-middle text-center'>
              <h3 className='text-light'>{category.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryItems
