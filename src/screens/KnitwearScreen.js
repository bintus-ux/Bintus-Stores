import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { listKnitwearItems } from '../actions/knitwearActions'

const KnitwearScreen = () => {
  const dispatch = useDispatch()

  const knitwearList = useSelector((state) => state.knitwearList)
  const { loading, error, knitwearItems } = knitwearList

  useEffect(() => {
    dispatch(listKnitwearItems())
  }, [dispatch])

  const isFound = knitwearItems.some((knitwear) => {
    if (knitwear._id) {
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
                      Knitwears
                    </h2>
                    <hr className='border border-primary ' />
                  </div>
                </div>
              </div>
              <Row>
                <div className='custom-margin'>
                  {knitwearItems.map((knitwearItem) => (
                    <div
                      xs={6}
                      md={4}
                      key={knitwearItem._id}
                      className='text-center'>
                      <Link
                        to={`/categoryItems/${knitwearItem.category}/${knitwearItem._id}`}>
                        {knitwearItem.countInStock === 0 ? (
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
                              src={knitwearItem.image}
                              className='img-fluid component-images lighter'
                              style={{ height: '450px', width: 'auto' }}
                            />
                          </>
                        ) : (
                          <Image
                            src={knitwearItem.image}
                            className='img-fluid component-images darker'
                            style={{ height: '450px', width: 'auto' }}
                          />
                        )}
                      </Link>

                      <div>
                        <Link
                          to={`/categoryItems/${knitwearItem.category}/${knitwearItem._id}`}
                          style={{ textDecoration: 'none' }}>
                          <h4
                            style={{ color: 'black' }}
                            className='text-capitalize my-3'>
                            {knitwearItem.name}
                          </h4>
                          <h4 style={{ color: 'black' }}>
                            - ₦{knitwearItem.price}
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
                    Sorry, there are no available items in this collection
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

export default KnitwearScreen
