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
import Loader from '../components/Loader'
import { getOrderDetails } from '../actions/orderActions'

const OrderScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate
  let { id } = useParams()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    )
  }

  useEffect(() => {
    dispatch(getOrderDetails(id))
  }, [dispatch, id])

  // calculating total items cost

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row className='mt-5'>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>Shipping Details</h2>
              <div className='shipping-details-container'>
                <div className='item1'>
                  <strong>Name:</strong>
                </div>
                <div className='item2'>
                  {order.shippingAddress.lastName}{' '}
                  {order.shippingAddress.firstName}
                </div>
                <div className='item1'>
                  <strong>Address:</strong>
                </div>
                <div className='item2'>
                  {order.shippingAddress.address1}
                  {'  '}
                </div>

                <div className='item1'>
                  <strong>State:</strong>
                </div>
                <div className='item2'>
                  {order.shippingAddress.selectedState}
                </div>
                <div className='item1'>
                  <strong>Phone:</strong>
                </div>
                <div className='item2'>{order.shippingAddress.phoneNumber}</div>
              </div>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Your order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
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
                          <Link to={`/product/₦{item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₦{item.price} = ₦{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2>Order Summery</h2>
              </ListGroupItem>
              <ListGroupItem>
                {order.orderItems.length === 0 ? (
                  <Message>Your order is empty</Message>
                ) : (
                  <ListGroup variant='flush' className='listing-items'>
                    {order.orderItems.map((item, index) => (
                      <ListGroupItem key={index}>
                        <Row>
                          <Col md={5}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={7}>
                            <Link to={`/product/₦{item.product}`}>
                              {item.name}
                            </Link>
                            <p className='mt-2'>Quantity: - {item.qty}</p>
                            <div className='mt-5'>₦{item.price}</div>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                )}
              </ListGroupItem>
              <ListGroupItem style={{ border: 'none' }}>
                <Row>
                  <Col>Items</Col>
                  <Col>₦{order.itemsPrice.toLocaleString('en-US')}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₦{order.shippingPrice.toLocaleString('en-US')}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Total</Col>
                  <Col>₦{order.totalPrice.toLocaleString('en-US')}</Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
