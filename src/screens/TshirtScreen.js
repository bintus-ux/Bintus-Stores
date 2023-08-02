import React from 'react'
import { tshirtItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const TshirtScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Tshirts
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Row>
        <div className='custom-margin'>
          {tshirtItems.map((tshirtItem) => (
            <div xs={6} md={4} key={tshirtItem._id} className='text-center'>
              <Link
                to={`/categoryItem/${tshirtItem.category}/${tshirtItem.linkName}`}>
                <Image
                  src={tshirtItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/categoryItem/${tshirtItem.category}/${tshirtItem.linkName}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-capitalize'>
                    {tshirtItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{tshirtItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default TshirtScreen
