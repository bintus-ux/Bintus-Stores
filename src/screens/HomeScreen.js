import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { products_0 } from '../products_folder/products'
import { newArrivals } from '../products_folder/products'
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
              Welcome To Bintus Store
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
        </Row>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='display-4 text-center text-capitalize font-italic'>
                New Arrivals
              </h2>
              <hr className='border border-primary ' />
            </div>
          </div>
        </div>
        <Row>
          <div className='custom-margin'>
            {newArrivals.map((newArrival) => (
              <div xs={6} md={4} key={newArrival._id} className='text-center'>
                <Link to={`/${newArrival.category}/${newArrival.linkName}`}>
                  <Image
                    src={newArrival.image}
                    className='img-fluid component-images darker'
                    style={{ height: '450px', width: 'auto' }}
                  />
                </Link>

                <div>
                  <Link
                    to={`/categoryItem/${newArrival.category}/${newArrival.linkName}`}
                    style={{ textDecoration: 'none' }}>
                    <h3 style={{ color: 'black' }} className='text-capitalize'>
                      {newArrival.name}
                    </h3>
                    <h3 style={{ color: 'black' }}>- ₦{newArrival.price}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
