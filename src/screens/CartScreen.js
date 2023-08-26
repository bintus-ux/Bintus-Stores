import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  Button,
  Container,
  Badge,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  ListGroupItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { useParams } from 'react-router-dom'
import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
} from '../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  let loggedIn = localStorage.getItem('userInfo')
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const removeAllFromCartHandler = () => {
    dispatch(removeAllFromCart())
  }

  const checkoutHandler = () => {
    if (!loggedIn) {
      navigate('/login')
    } else {
      navigate('/shipping')
    }
  }

  // calculating shipping cost

  const shipping = cartItems.reduce((acc, item) => acc + item.qty * 500, 0)

  // calculating subtotal cost

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  )

  //  adding subtotal cost & shipping cost

  const total = subtotal + shipping
  console.log(total)

  return (
    <Container fluid>
      <div className='row my-5'>
        <div className='col-12'>
          <h2 className='display-4 text-center text-capitalize font-italic'>
            Cart Items{' '}
          </h2>
          <hr className='border border-primary ' />
        </div>
      </div>
      <div className='d-flex justify-content-end'>
        <span
          type='button'
          style={{ color: 'red' }}
          onClick={() => removeAllFromCartHandler()}>
          Clear all
        </span>
      </div>
      <Row style={{ marginTop: '20px' }}>
        <Col md={9}>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty. <Link to='/'>Head Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={3}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/categoryItems/${item.product}`}>
                        <h3>{item.name}</h3>
                      </Link>
                      <p>Price/piece: ₦{item.price}</p>
                    </Col>

                    <Col md={3}>
                      <div className='position-relative'>
                        <i className='fa-sharp fa-solid fa-cart-shopping mx-5'>
                          <span className='position-absolute badge top-0 bg-danger border border-light rounded-circle'>
                            {item.qty}
                          </span>
                        </i>
                        <div
                          className='btn-group'
                          role='group'
                          aria-label='button group'>
                          <button
                            type='button'
                            className='btn btn-success'
                            style={{
                              padding: '20px',
                            }}
                            onClick={() => {
                              dispatch(addToCart(item.product, item.qty + 1))
                            }}>
                            <i className='fa-solid fa-plus'></i>
                          </button>
                          <button
                            type='button'
                            className='btn btn-danger'
                            style={{
                              marginTop: '10px',
                              marginBottom: '10px',
                              padding: '10px',
                            }}
                            onClick={() => {
                              dispatch(
                                addToCart(
                                  item.product,
                                  Math.max(item.qty - 1, 0)
                                )
                              )
                            }}>
                            <i className='fa-solid fa-minus'></i>
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col md={1}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={3}>
          <div className='text-center'>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <h5
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        textAlign: 'left',
                      }}>
                      Subtotal:{'  '}
                    </h5>{' '}
                    <span>
                      {' '}
                      ₦
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toLocaleString('en-US')}
                    </span>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <p style={{ textAlign: 'left' }}>Total items:{'  '}</p>{' '}
                    <span style={{ textAlign: 'right' }}>
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </span>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <p>Shipping:</p>
                    <span>{shipping}</span>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <h5>Total:</h5>
                    <span>{total}</span>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <button
                    type='button'
                    className='btn btn-outline-success'
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}>
                    Checkout ₦{total}
                  </button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CartScreen
