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
    <Container fluid>
      <div className='my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Welcome To Bintus Store
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Slideshow products_0={products_0} />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-6 text-center text-capitalize font-italic'>
              Categories
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Row>
        <div className='custom-margin'>
          {categoryItems.map((categoryItem) => (
            <CategoryItems key={categoryItem._id} categoryItem={categoryItem} />
          ))}
        </div>
      </Row>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-6 text-center text-capitalize font-italic'>
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
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center text-capitalize font-italic'>
              Read Customer Reviews...
            </h2>
            <div md={6} className='text-center'>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
              <i style={{ color: 'red' }} className='far fa-star'></i>
            </div>
            <Link to='#'>
              <p className='h6 text-center'>from reviews</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='p-3 mb-2 bg-danger text-white'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='display-6 text-center text-capitalize font-italic'>
                Subscribe to our newsletter
              </h4>
              <p md={12} className='text-center'>
                Promotions, new products and sales. Directly to your inbox.
              </p>
              <p md={12} className='text-center'>
                Become a part of us, now!
              </p>
              <hr className='border border-primary ' />
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <form>
                <div className='input-group mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email'
                    aria-label='Email address'
                    aria-describedby='submitButton'
                    required
                  />
                  <div className='input-group-append'>
                    <button
                      className='btn btn-primary'
                      type='submit'
                      id='submitButton'>
                      Submit
                    </button>
                  </div>
                </div>
                <div className='invalid-feedback'>
                  Please provide a valid email address.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='circle d-flex align-items-center justify-content-center'>
            <span className='circle-text'>Hello</span>
          </div>
        </div>
      </div>
      <div className='w-25 grid-product__sold-out'>
        <p>
          Sold
          <br /> Out
        </p>
      </div>
    </Container>
  )
}

export default HomeScreen
