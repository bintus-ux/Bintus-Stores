import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
import { addCapToCart, addTeeToCart } from '../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()
  const [itemCount, setItemCount] = useState(1)

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  useEffect(() => {
    if (id) {
      dispatch(addCapToCart(id, itemCount))
      dispatch(addTeeToCart(id, itemCount))
    }
  }, [dispatch, id, itemCount])

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
                            {itemCount}
                          </span>
                        </i>
                        <div
                          className='btn-group'
                          role='group'
                          aria-label='button group'>
                          <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => {
                              setItemCount(itemCount + 1)
                            }}>
                            <i className='fa-solid fa-plus'></i>
                          </button>
                          <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={() => {
                              setItemCount(Math.max(itemCount - 1, 0))
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

      {/* <div className='row'>
        <div className='d-flex justify-content-around col-12'>
          <div>
            <p style={{ fontSize: '20px' }}>Cart item</p>
          </div>
          <div>
            <div className='position-relative'>
              <i className='fa-sharp fa-solid fa-cart-shopping mx-5'>
                <span className='position-absolute badge top-0 bg-danger border border-light rounded-circle'>
                  {itemCount}
                </span>
              </i>

              <div className='btn-group' role='group' aria-label='button group'>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => {
                    setItemCount(itemCount + 1)
                  }}>
                  <i className='fa-solid fa-plus'></i>
                </button>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={() => {
                    setItemCount(Math.max(itemCount - 1, 0))
                  }}>
                  <i className='fa-solid fa-minus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  )
}

export default CartScreen
