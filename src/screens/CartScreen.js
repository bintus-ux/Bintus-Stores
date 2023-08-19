import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Button,
  Container,
  Badge,
  Row,
  Col,
  ListGroup,
  Image,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()
  const [itemCount, setItemCount] = useState(1)

  const dispatch = useDispatch()
  const location = useLocation()

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id) => {
    console.log('remove')
  }

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
      <Row>
        <Col md={12}>
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
                    </Col>
                    <Col md={1}>${item.price}</Col>
                    <Col md={4}>
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
                            className='btn btn-danger'
                            onClick={(e) => {
                              dispatch(addToCart(item.product, item.qty + 1))
                            }}>
                            <i className='fa-solid fa-plus'></i>
                          </button>
                          <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={(e) => {
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
                    <Col md={2}>
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
        <Col md={2}></Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  )
}

export default CartScreen
