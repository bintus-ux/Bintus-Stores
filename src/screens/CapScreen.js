import React from 'react'
import { capItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const CapScreen = () => {
  return (
    <>
      <div>
        <h2 className='text-center text-capitalize font-italic'>Caps</h2>
      </div>
      <hr />
      <Row>
        <div className='custom-margin'>
          {capItems.map((capItem) => (
            <div xs={6} md={4} key={capItem._id} className='text-center'>
              <Link to={`/cap/${capItem._id}`}>
                <Image
                  src={capItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/cap/${capItem._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-capitalize'>
                    {capItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{capItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default CapScreen
