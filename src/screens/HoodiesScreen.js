import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listHoodieItems } from '../actions/hoodieActions'

const HoodiesScreen = () => {
  const dispatch = useDispatch()

  const hoodieList = useSelector((state) => state.hoodieList)
  const { loading, error, hoodieItems } = hoodieList
  useEffect(() => {
    dispatch(listHoodieItems())
  }, [dispatch])
  const isFound = hoodieItems.some((hoodies) => {
    if (hoodies._id) {
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
                      Hoodies
                    </h2>
                    <hr className='border border-primary ' />
                  </div>
                </div>
              </div>
              <Row>
                <div className='custom-margin'>
                  {hoodieItems.map((hoodiesItem) => (
                    <div
                      xs={6}
                      md={4}
                      key={hoodiesItem._id}
                      className='text-center'>
                      <Link
                        to={`/categoryItems/${hoodiesItem.category}/${hoodiesItem._id}`}>
                        {hoodiesItem.countInStock === 0 ? (
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
                              src={hoodiesItem.image}
                              className='img-fluid component-images lighter'
                              style={{ height: '450px', width: 'auto' }}
                            />
                          </>
                        ) : (
                          <Image
                            src={hoodiesItem.image}
                            className='img-fluid component-images darker'
                            style={{ height: '450px', width: 'auto' }}
                          />
                        )}
                      </Link>

                      <div>
                        <Link
                          to={`/categoryItems/${hoodiesItem.category}/${hoodiesItem._id}`}
                          style={{ textDecoration: 'none' }}>
                          <h3
                            style={{ color: 'black' }}
                            className='text-capitalize'>
                            {hoodiesItem.name}
                          </h3>
                          <h3 style={{ color: 'black' }}>
                            - ₦{hoodiesItem.price}
                          </h3>
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

export default HoodiesScreen
