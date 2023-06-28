import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { products_0 } from '../products'
import Slideshow from '../components/Slideshow'

const HomeScreen = () => {
  return (
    <>
      <Container fluid>
        <h1 className='text-header'>Welcome to Bintus Stores</h1>
        <Slideshow products_0={products_0} />
        <h2 className='text-header2'>Categories</h2>
        <Row>
          <Col xs={6} md={4} className='position-relative'>
            <Image
              src='/hoodies_images/IMG_0842.JPG'
              className='img-fluid component-images'
              thumbnail
            />
            <div className='position-absolute top-50 start-50 translate-middle text-center'>
              <h3 className='text-light'>Hoodies</h3>
            </div>
          </Col>
          <Col xs={6} md={4} className='position-relative'>
            <Image
              src='/tees_images/IMG_0898.JPG'
              className='img-fluid component-images'
              thumbnail
            />
            <div className='position-absolute top-50 start-50 translate-middle text-center'>
              <h3 className='text-light'>Tees</h3>
            </div>
          </Col>
          <Col xs={6} md={4} className='position-relative'>
            <Image
              src='/tees_images/IMG_0898.JPG'
              className='img-fluid component-images'
              thumbnail
            />
            <div className='position-absolute top-50 start-50 translate-middle text-center'>
              <h3 className='text-light'>Hoodies</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
