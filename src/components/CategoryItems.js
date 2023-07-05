import React from 'react'
import { Carousel, Col, Row, Image, Container } from 'react-bootstrap'

const CategoryItems = ({ categoryItem }) => {
  return (
    <>
      <Row>
        {categoryItem.map((category) => (
          <Col xs={6} md={4} className='position-relative custom-margin'>
            <Image
              src={category.image}
              className='img-fluid component-images'
            />
            <div className='position-absolute top-50 start-50 translate-middle text-center'>
              <h3 className='text-light'>{category.text}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CategoryItems
