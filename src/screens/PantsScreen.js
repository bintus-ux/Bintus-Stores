import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Row, Image } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listPantItems } from '../actions/pantActions'

const PantsScreen = () => {
  const dispatch = useDispatch()

  const pantList = useSelector((state) => state.pantList)
  const { loading, error, pantItems } = pantList

  useEffect(() => {
    dispatch(listPantItems())
  }, [dispatch])

  const isFound = pantItems.some((pant) => {
    if (pant._id) {
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
                      Pants
                    </h2>
                    <hr className='border border-primary ' />
                  </div>
                </div>
              </div>

              <Row>
                <div className='custom-margin'>
                  {pantItems.map((pantsItem) => (
                    <div
                      xs={6}
                      md={4}
                      key={pantsItem._id}
                      className='text-center'>
                      <Link
                        to={`/categoryItems/${pantsItem.category}/${pantsItem._id}`}>
                        {pantsItem.countInStock === 0 ? (
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
                              src={pantsItem.image}
                              className='img-fluid component-images lighter'
                              style={{ height: '450px', width: 'auto' }}
                            />
                          </>
                        ) : (
                          <Image
                            src={pantsItem.image}
                            className='img-fluid component-images darker'
                            style={{ height: '450px', width: 'auto' }}
                          />
                        )}
                      </Link>

                      <div>
                        <Link
                          to={`/categoryItems/${pantsItem.category}/${pantsItem._id}`}
                          style={{ textDecoration: 'none' }}>
                          <h4
                            style={{ color: 'black' }}
                            className='text-capitalize my-3'>
                            {pantsItem.name}
                          </h4>
                          <h4 style={{ color: 'black' }}>
                            - ₦{pantsItem.price}
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

export default PantsScreen
