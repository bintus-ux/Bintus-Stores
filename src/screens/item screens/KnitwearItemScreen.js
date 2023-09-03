import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listKnitwearItemDetails } from '../../actions/knitwearActions'

const KnitwearItemScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [qty, setQty] = useState(1)

  const knitwearDetails = useSelector((state) => state.knitwearDetails)
  const { loading, error, knitwearItem } = knitwearDetails
  useEffect(() => {
    dispatch(listKnitwearItemDetails(id))
  }, [dispatch, id])

  const addToCartFunction = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }
  const max = knitwearItem.countInStock

  const handleIncrement = () => {
    if (qty < max) {
      setQty(qty + 1)
    }
  }
  const handleDecrement = () => {
    if (qty > 0) {
      setQty(Math.max(qty - 1, 0))
    }
  }

  return (
    <>
      <button className='btn btn-light my-3' onClick={() => navigate(-1)}>
        Go Back
      </button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {knitwearItem && (
            <>
              <Row>
                <Col md={6}>
                  <Image
                    src={knitwearItem.image}
                    alt={knitwearItem.name}
                    fluid
                  />
                </Col>
                <Col md={6}>
                  <ListGroup variant='flush'>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      <h3>{knitwearItem.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      {knitwearItem.countInStock > 1 &&
                      knitwearItem.countInStock <= 5 ? (
                        <i
                          className='fa-solid fa-circle fa-beat'
                          style={{ color: '#b19c17' }}></i>
                      ) : knitwearItem.countInStock > 0 ? (
                        <i
                          className='fa-solid fa-circle fa-beat'
                          style={{ color: '#50d731' }}></i>
                      ) : (
                        <i
                          className='fa-solid fa-circle'
                          style={{ color: '#a63647' }}></i>
                      )}{' '}
                      {knitwearItem.countInStock} {knitwearItem.category}{' '}
                      {knitwearItem.countInStock > 0
                        ? 'in Stock!'
                        : 'out of Stock.'}
                    </ListGroupItem>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      {knitwearItem.countInStock >= 1 && (
                        <>
                          <p>Quantity:</p>
                          <div className='number-input'>
                            <div className='text-center'>
                              <button
                                className='icon-button'
                                style={{
                                  color: 'black',
                                  backgroundColor: 'white',
                                  width: '40px',
                                }}
                                disabled={qty === max}
                                onClick={handleIncrement}>
                                +
                              </button>{' '}
                              <input
                                type='text'
                                className='input-field'
                                value={qty}
                                style={{ border: 'none', width: '50px' }}
                                onChange={(e) => {
                                  const newValue = parseInt(
                                    e.target.qty,
                                    knitwearItem.countInStock
                                  )
                                  if (!isNaN(newValue) && newValue <= max) {
                                    setQty(newValue)
                                  }
                                }}
                              />{' '}
                              <button
                                className='icon-button'
                                style={{
                                  color: 'black',
                                  backgroundColor: 'white',
                                  width: '30px',
                                }}
                                disabled={qty === 0}
                                onClick={handleDecrement}>
                                -
                              </button>{' '}
                            </div>
                          </div>
                        </>
                      )}
                    </ListGroupItem>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      <h3>₦{knitwearItem.price}</h3>
                    </ListGroupItem>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      <p>{knitwearItem.info}</p>
                    </ListGroupItem>
                    <ListGroupItem style={{ border: 'none' }}>
                      <Button
                        onClick={addToCartFunction}
                        className='btn-block btn-xl'
                        type='button'
                        disabled={knitwearItem.countInStock === 0}>
                        Add To Cart
                      </Button>
                    </ListGroupItem>
                    <ListGroupItem style={{ border: 'none' }}>
                      <Button
                        className='btn-block btn-light btn-xl'
                        type='button'
                        disabled={knitwearItem.countInStock === 0}>
                        Buy Now!
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col md={12} className='text-center my-4'>
                  <h3>Customer Reviews</h3>
                </Col>
              </Row>
              <Row>
                <Col md={6} className='text-center'>
                  <i style={{ color: 'red' }} className='far fa-star'></i>
                  <i style={{ color: 'red' }} className='far fa-star'></i>
                  <i style={{ color: 'red' }} className='far fa-star'></i>
                  <i style={{ color: 'red' }} className='far fa-star'></i>
                  <i style={{ color: 'red' }} className='far fa-star'></i>
                  <p>Be the first to write a review!</p>
                </Col>
                <Col md={6}>
                  <Button className='btn-block btn-light btn-xl' type='button'>
                    Leave a review!!
                  </Button>
                </Col>
              </Row>
            </>
          )}
          <Row>
            <Col md={12} className='text-center my-4'>
              <button
                className='btn btn-light btn-md my-3'
                onClick={() => navigate(-1)}>
                <i className='fa-solid fa-circle-left mx-2'></i>Back to Item
                Catalog
              </button>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default KnitwearItemScreen
