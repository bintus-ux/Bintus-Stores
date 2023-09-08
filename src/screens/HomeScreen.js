import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import { products_0 } from '../products_folder/products'
import Slideshow from '../components/Slideshow'
import CategoryItems from '../components/CategoryItems'
import NewArrivals from '../components/NewArrivals'

const HomeScreen = ({ categoryItems, newArrivalItems }) => {
  return (
    <Container fluid>
      <div className='row my-4'>
        <div className='col-12'>
          <h2 className='display-4 text-center text-capitalize font-italic'>
            Welcome To Bintus Store
          </h2>
          <hr className='border border-primary ' />
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
        <CategoryItems CategoryItems={categoryItems} />
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
        <NewArrivals newArrivalItems={newArrivalItems} />
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
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <form>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Enter email'
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomeScreen
