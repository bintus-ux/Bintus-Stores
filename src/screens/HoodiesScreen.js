import React from 'react'
import { hoodiesItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const HoodiesScreen = () => {
  return (
    <>
      <div>
        <h2 className='text-center text-capitalize font-italic'>Hoodies</h2>
      </div>
      <hr />
      <Row>
        <div className='custom-margin'>
          {hoodiesItems.map((hoodiesItem) => (
            <div xs={6} md={4} key={hoodiesItem._id} className='text-center'>
              <Link to={`/hoodies/${hoodiesItem._id}`}>
                <Image
                  src={hoodiesItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/hoodies/${hoodiesItem._id}`}
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
