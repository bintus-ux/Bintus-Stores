import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Image } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listCapItems } from '../actions/capActions'

const CapScreen = () => {
  const dispatch = useDispatch()

  const capList = useSelector((state) => state.capList)
  const { loading, error, capItems } = capList

  useEffect(() => {
    dispatch(listCapItems())
  }, [dispatch])

  const isFound = capItems.some((cap) => {
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
                      Caps
                    </h2>
                    <hr className='border border-primary ' />
                  </div>
                </div>
              </div>
              <Row>
                <div className='custom-margin'>
                  {capItems.map((capItem) => (
                    <div
                      xs={6}
                      md={4}
                      key={capItem._id}
                      className='text-center'>
                      <Link
                        to={`/categoryItems/${capItem.category}/${capItem._id}`}>
                        {capItem.countInStock === 0 ? (
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
                              src={capItem.image}
                              className='img-fluid component-images lighter'
                              style={{ height: '450px', width: 'auto' }}
                            />
                          </>
                        ) : (
                          <Image
                            src={capItem.image}
                            className='img-fluid component-images darker'
                            style={{ height: '450px', width: 'auto' }}
                          />
                        )}
                      </Link>

                      <div>
                        <Link
                          to={`/categoryItems/${capItem.category}/${capItem._id}`}
                          style={{ textDecoration: 'none' }}>
                          <h3
                            style={{ color: 'black' }}
                            className='text-capitalize'>
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

export default CapScreen
