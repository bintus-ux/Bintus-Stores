import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutStepsRow from '../components/CheckoutStepsRow'

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <>
      <CheckoutStepsRow step1 step2 step3 step4 />
      <Row className='mt-5' style={{ border: '1px red solid' }}>
        <Col md={8} style={{ border: '1px red solid' }}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>Shipping</h2>
              <div className='shipping-details-container'>
                <div className='item1'>
                  <strong>Name:</strong>
                </div>
                <div className='item2'>
                  {cart.shippingAddress.lastName}{' '}
                  {cart.shippingAddress.firstName}
                </div>
                <div className='item1'>
                  <strong>Address:</strong>
                </div>
                <div className='item2'>
                  {cart.shippingAddress.address1}
                  {'  '}
                </div>
                <div className='item1'>
                  <strong>State:</strong>
                </div>
                <div className='item2'>
                  {cart.shippingAddress.selectedState}
                </div>
                <div className='item1'>
                  <strong>Phone:</strong>
                </div>
                <div className='item2'>{cart.shippingAddress.phoneNumber}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroupItem>
            <ListGroupItem>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
