import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { products_0 } from '../products_folder/products'
import Slideshow from '../components/Slideshow'
import CategoryItems from '../components/CategoryItems'
import categoryItems from '../products_folder/categoryItems'
const HomeScreen = () => {
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Welcome To Bintus Stores
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Container fluid>
        <Slideshow products_0={products_0} />
        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='display-4 text-center text-capitalize font-italic'>
                Categories
              </h2>
              <hr className='border border-primary ' />
            </div>
          </div>
        </div>
        <Row>
          <div className='custom-margin'>
            {categoryItems.map((categoryItem) => (
              <CategoryItems
                key={categoryItem._id}
                categoryItem={categoryItem}
              />
            ))}
          </div>

          {/* <Col xs={6} md={4} className='position-relative'>
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
          </Col> */}
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
