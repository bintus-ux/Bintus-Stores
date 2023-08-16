import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const TshirtItemScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tshirt, setTshirt] = useState({})

  useEffect(() => {
    const fetchTshirt = async () => {
      const { data } = await axios.get(`/api/categoryItems/tshirts/${id}`)

      setTshirt(data)
    }

    fetchTshirt()
  }, [])
  return (
    <>
      <button className='btn btn-light my-3' onClick={() => navigate(-1)}>
        Go Back
      </button>
      {tshirt ? (
        <>
          <Row>
            <Col md={6}>
              <Image src={tshirt.image} alt={tshirt.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{tshirt.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦{tshirt.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{tshirt.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={tshirt.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={tshirt.countInStock === 0}>
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
            <i className='fa-solid fa-circle-left mx-2'></i>Back to Item Catalog
          </button>
        </Col>
      </Row>
    </>
  )
}

export default TshirtItemScreen
