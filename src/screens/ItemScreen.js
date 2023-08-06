import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {
  teesItems,
  footwearItems,
  tshirtItems,
  knitwearItems,
  newArrivals,
  hoodiesItems,
  setsItems,
  pantsItems,
} from '../products_folder/products'
import axios from 'axios'

const ItemScreen = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [cap, setCap] = useState({})

  useEffect(() => {
    const fetchCap = async () => {
      const { data } = await axios.get(`/api/categoryItems/caps/${id}`)

      setCap(data)
    }

    fetchCap()
  }, [])
  const tees = teesItems.find((p) => p.linkName === id)
  const footwear = footwearItems.find((p) => p.linkName === id)
  const tshirts = tshirtItems.find((p) => p.linkName === id)
  const newItems = newArrivals.find((p) => p.linkName === id)
  const knitwear = knitwearItems.find((p) => p.linkName === id)
  const hoodiesItem = hoodiesItems.find((p) => p.linkName === id)
  const setsItem = setsItems.find((p) => p.linkName === id)
  const pantsItem = pantsItems.find((p) => p.linkName === id)

  return (
    <>
      <button className='btn btn-light my-3' onClick={() => navigate(-1)}>
        Go Back
      </button>
      {cap ? (
        // Mapping Per cap ids
        <>
          <Row>
            <Col md={6}>
              <Image src={cap.image} alt={cap.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{cap.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {cap.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{cap.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={cap.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={cap.countInStock === 0}>
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
      ) : tees ? (
        // Mapping Per tees ids
        <>
          <Row>
            <Col md={6}>
              <Image src={tees.image} alt={tees.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{tees.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {tees.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{tees.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={tees.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={tees.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem className='mt-5' style={{ border: 'none' }}>
                  <p>{tees.desc_texture}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{tees.desc_weight}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{tees.desc_info}</p>
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
      ) : footwear ? (
        // Mapping Per footwear ids
        <>
          <Row>
            <Col md={6}>
              <Image src={footwear.image} alt={footwear.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{footwear.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {footwear.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{footwear.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={footwear.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={footwear.countInStock === 0}>
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
      ) : tshirts ? (
        // Mapping Per tshirt ids
        <>
          <Row>
            <Col md={6}>
              <Image src={tshirts.image} alt={tshirts.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{tshirts.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {tshirts.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{tshirts.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    style={{ border: 'none' }}
                    disabled={tshirts.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={tshirts.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem>
                  <p>{tshirts.description}</p>
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
      ) : newItems ? (
        // Mapping Per newitems ids
        <>
          <Row>
            <Col md={6}>
              <Image src={newItems.image} alt={newItems.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{newItems.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {newItems.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{newItems.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={newItems.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={newItems.countInStock === 0}>
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
      ) : knitwear ? (
        // Mapping Per knitwear ids
        <>
          <Row>
            <Col md={6}>
              <Image src={knitwear.image} alt={knitwear.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{knitwear.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {knitwear.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{knitwear.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={knitwear.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={knitwear.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{knitwear.description}</p>
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
      ) : hoodiesItem ? (
        // Mapping Per hoodies ids
        <>
          <Row>
            <Col md={6}>
              <Image src={hoodiesItem.image} alt={hoodiesItem.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{hoodiesItem.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {hoodiesItem.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{hoodiesItem.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={hoodiesItem.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={hoodiesItem.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem className='mt-5' style={{ border: 'none' }}>
                  <p>{hoodiesItem.desc_1}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{hoodiesItem.desc_2}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{hoodiesItem.desc_3}</p>
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
      ) : setsItem ? (
        // Mapping Per set ids
        <>
          <Row>
            <Col md={6}>
              <Image src={setsItem.image} alt={setsItem.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{setsItem.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {setsItem.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{setsItem.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={setsItem.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={setsItem.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{setsItem.description}</p>
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
      ) : pantsItem ? (
        <>
          <Row>
            <Col md={6}>
              <Image src={pantsItem.image} alt={pantsItem.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{pantsItem.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {pantsItem.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{pantsItem.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={pantsItem.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={pantsItem.countInStock === 0}>
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

export default ItemScreen
