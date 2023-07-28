import React from 'react'
import { Carousel, Col, Row, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryItems = ({ category }) => {
  return (
    <>
      <div xs={6} md={4} className='position-relative'>
        <Link to={`/category/${category._id}`}>
          <Image
            src={category.image}
            className='img-fluid component-images darker'
          />
          <div className='position-absolute top-50 start-50 translate-middle text-center'>
            <h3 className='text-light'>{category.text}</h3>
          </div>
        </Link>
      </div>
    </>
  )
}

export default CategoryItems
