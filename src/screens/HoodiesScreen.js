import React from 'react'
import { hoodiesItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const HoodiesScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Hoodies
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Row>
        <div className='custom-margin'>
          {hoodiesItems.map((hoodiesItem) => (
            <div xs={6} md={4} key={hoodiesItem._id} className='text-center'>
              <Link
                to={`/categoryItem/${hoodiesItem.category}/${hoodiesItem._id}`}>
                <Image
                  src={hoodiesItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/categoryItem/${hoodiesItem.category}/${hoodiesItem._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-capitalize'>
                    {hoodiesItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{hoodiesItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default HoodiesScreen
