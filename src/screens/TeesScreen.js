import React from 'react'
import { teesItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const TeesScreen = () => {
  const isFound = teesItems.some((cap) => {
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
                  Tees
                </h2>
                <hr className='border border-primary ' />
              </div>
            </div>
          </div>
          <Row>
            <div className='custom-margin'>
              {teesItems.map((teesItem) => (
                <div xs={6} md={4} key={teesItem._id} className='text-center'>
                  <Link
                    to={`/categoryItem/${teesItem.category}/${teesItem.linkName}`}>
                    <Image
                      src={teesItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  </Link>

                  <div>
                    <Link
                      to={`/categoryItem/${teesItem.category}/${teesItem.linkName}`}
                      style={{ textDecoration: 'none' }}>
                      <h3
                        style={{ color: 'black' }}
                        className='text-teesitalize'>
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
      ) : (
        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <p className='display-4 text-center font-italic'>
                Sorry, there are no available items in this collection
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TeesScreen
