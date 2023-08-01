import React from 'react'
import { knitwearItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const KnitwearScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Knitwears
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      <Row>
        <div className='custom-margin'>
          {knitwearItems.map((knitwearItem) => (
            <div xs={6} md={4} key={knitwearItem._id} className='text-center'>
              <Link
                to={`/categoryItem/${knitwearItem.category}/${knitwearItem._id}`}>
                <Image
                  src={knitwearItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/categoryItem/${knitwearItem.category}/${knitwearItem._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-capitalize'>
                    {knitwearItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{knitwearItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default KnitwearScreen
