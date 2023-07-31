import React from 'react'
import { pantsItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const PantsScreen = () => {
  return (
    <>
      <div>
        <h2 className='text-center text-capitalize font-italic'>Pants</h2>
      </div>
      <hr />
      <Row>
        <div className='custom-margin'>
          {pantsItems.map((pantsItem) => (
            <div xs={6} md={4} key={pantsItem._id} className='text-center'>
              <Link to={`/pants/${pantsItem._id}`}>
                <Image
                  src={pantsItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/pants/${pantsItem._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-capitalize'>
                    {pantsItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{pantsItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default PantsScreen
