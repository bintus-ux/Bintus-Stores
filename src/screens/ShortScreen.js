import React from 'react'
import { shortItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const ShortScreen = () => {
  const isFound = shortItems.some((cap) => {
    if (cap._id) {
      return true
    }
    return false
  })
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {isFound ? (
        <>
          <div className='container my-5'>
            <div className='row'>
              <div className='col-12'>
                <h2 className='display-4 text-center text-capitalize font-italic'>
                  Shorts
                </h2>
                <hr className='border border-primary ' />
              </div>
            </div>
          </div>
          <Row>
            <div className='custom-margin'>
              {shortItems.map((shortItem) => (
                <div xs={6} md={4} key={shortItem._id} className='text-center'>
                  <Link
                    to={`/categoryItem/${shortItem.category}/${shortItem.linkName}`}>
                    <Image
                      src={shortItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  </Link>

                  <div>
                    <Link
                      to={`/categoryItem/${shortItem.category}/${shortItem.linkName}`}
                      style={{ textDecoration: 'none' }}>
                      <h3
                        style={{ color: 'black' }}
                        className='text-capitalize'>
                        {shortItem.name}
                      </h3>
                      <h3 style={{ color: 'black' }}>- ₦{shortItem.price}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Row>
        </>
      ) : (
        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <p className='display-4 text-center  font-italic'>
                Sorry, there are no available items in this collection.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ShortScreen
