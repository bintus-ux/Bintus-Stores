import React from 'react'
import { teesItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const TeesScreen = () => {
  return (
    <>
      <div>
        <h2 className='text-center text-capitalize font-italic'>Caps</h2>
      </div>
      <hr />
      <Row>
        <div className='custom-margin'>
          {teesItems.map((teesItem) => (
            <div xs={6} md={4} key={teesItem._id} className='text-center'>
              <Link to={`/tees/${teesItem._id}`}>
                <Image
                  src={teesItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/tees/${teesItem._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-teesitalize'>
                    {teesItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{teesItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default TeesScreen
