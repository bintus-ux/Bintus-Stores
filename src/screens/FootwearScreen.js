import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { listFootwearItems } from '../actions/footwearActions'

const FootwearScreen = () => {
  const dispatch = useDispatch()

  const footwearList = useSelector((state) => state.footwearList)
  const { loading, error, footwearItems } = footwearList

  useEffect(() => {
    dispatch(listFootwearItems())
  }, [dispatch])

  const isFound = footwearItems.some((footwear) => {
    if (footwear._id) {
      return true
    }
    return false
  })
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {isFound ? (
            <>
              <div className='container my-5'>
                <div className='row'>
                  <div className='col-12'>
                    <h2 className='display-4 text-center text-capitalize font-italic'>
                      Footwears
                    </h2>
                    <hr className='border border-primary ' />
                  </div>
                </div>
              </div>
              <Row>
                <div className='custom-margin'>
                  {footwearItems.map((footwearItem) => (
                    <div
                      xs={6}
                      md={4}
                      key={footwearItem._id}
                      className='text-center'>
                      <Link
                        to={`/categoryItems/${footwearItem.category}/${footwearItem._id}`}>
                        {footwearItem.countInStock === 0 ? (
                          <>
                            <div className='row justify-content-left'>
                              <div className='circle d-flex align-items-center justify-content-center'>
                                <p className='circle-text position-absolute'>
                                  Sold
                                  <br /> Out
                                </p>
                              </div>
                            </div>
                            <Image
                              src={footwearItem.image}
                              className='img-fluid component-images lighter'
                              style={{ height: '450px', width: 'auto' }}
                            />
                          </>
                        ) : (
                          <Image
                            src={footwearItem.image}
                            className='img-fluid component-images darker'
                            style={{ height: '450px', width: 'auto' }}
                          />
                        )}
                      </Link>

                      <div>
                        <Link
                          to={`/categoryItems/${footwearItem.category}/${footwearItem._id}`}
                          style={{ textDecoration: 'none' }}>
                          <h4
                            style={{ color: 'black' }}
                            className='text-capitalize my-3'>
                            {footwearItem.name}
                          </h4>
                          <h4 style={{ color: 'black' }}>
                            - ₦{footwearItem.price}
                          </h4>
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
                    Sorry, there are no available items in this collection.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default FootwearScreen
