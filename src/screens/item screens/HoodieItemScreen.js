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
import { listHoodieItemDetails } from '../../actions/hoodieActions'

const HoodieItemScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const hoodieDetails = useSelector((state) => state.hoodieDetails)
  const { loading, error, hoodieItem } = hoodieDetails
  useEffect(() => {
    dispatch(listHoodieItemDetails(id))
  }, [dispatch, id])
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
          {hoodieItem ? (
            <>
              <Row>
                <Col md={6}>
                  <Image src={hoodieItem.image} alt={hoodieItem.name} fluid />
                </Col>
                <Col md={6}>
                  <ListGroup variant='flush'>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      <h3>{hoodieItem.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      <h3>₦{hoodieItem.price}</h3>
                    </ListGroupItem>
                    <ListGroupItem
                      className='text-center'
                      style={{ border: 'none' }}>
                      <p>{hoodieItem.info}</p>
                    </ListGroupItem>
                    <ListGroupItem style={{ border: 'none' }}>
                      <Button
                        className='btn-block btn-xl'
                        type='button'
                        disabled={hoodieItem.countInStock === 0}>
                        Add To Cart
                      </Button>
                    </ListGroupItem>
                    <ListGroupItem style={{ border: 'none' }}>
                      <Button
                        className='btn-block btn-light btn-xl'
                        type='button'
                        disabled={hoodieItem.countInStock === 0}>
                        Buy Now!
                      </Button>
                    </ListGroupItem>
                    <ListGroupItem className='mt-5' style={{ border: 'none' }}>
                      <p>{hoodieItem.desc_1}</p>
                    </ListGroupItem>
                    <ListGroupItem style={{ border: 'none' }}>
                      <p>{hoodieItem.desc_2}</p>
                    </ListGroupItem>
                    <ListGroupItem style={{ border: 'none' }}>
                      <p>{hoodieItem.desc_3}</p>
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
              <Row>
                <Col md={12} className='text-center my-4'>
                  <h3>You may also like</h3>
                </Col>
              </Row>
            </>
          ) : (
            ''
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

export default HoodieItemScreen
