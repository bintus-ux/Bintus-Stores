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

const ItemScreen = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [cap, setCap] = useState({})
  const [tee, setTee] = useState({})
  const [knitwear, setKnitwear] = useState({})
  const [footwear, setFootwear] = useState({})
  const [hoodie, setHoodie] = useState({})
  const [pant, setPant] = useState({})
  const [set, setSet] = useState({})
  const [short, setShort] = useState({})
  const [tshirt, setTshirt] = useState({})
  const [newArrival, setNewArrival] = useState({})

  useEffect(() => {
    const fetchCap = async () => {
      const { data } = await axios.get(`/api/categoryItems/caps/${id}`)

      setCap(data)
    }

    fetchCap()
  }, [])

  useEffect(() => {
    const fetchTee = async () => {
      const { data } = await axios.get(`/api/categoryItems/tees/${id}`)

      setTee(data)
    }

    fetchTee()
  }, [])

  useEffect(() => {
    const fetchKnitwear = async () => {
      const { data } = await axios.get(`/api/categoryItems/knitwears/${id}`)

      setKnitwear(data)
    }

    fetchKnitwear()
  }, [])
  useEffect(() => {
    const fetchFootwear = async () => {
      const { data } = await axios.get(`/api/categoryItems/footwears/${id}`)

      setFootwear(data)
    }

    fetchFootwear()
  }, [])
  useEffect(() => {
    const fetchHoodie = async () => {
      const { data } = await axios.get(`/api/categoryItems/hoodies/${id}`)

      setHoodie(data)
    }

    fetchHoodie()
  }, [])
  useEffect(() => {
    const fetchPant = async () => {
      const { data } = await axios.get(`/api/categoryItems/pants/${id}`)

      setPant(data)
    }

    fetchPant()
  }, [])
  useEffect(() => {
    const fetchSet = async () => {
      const { data } = await axios.get(`/api/categoryItems/sets/${id}`)

      setSet(data)
    }

    fetchSet()
  }, [])
  useEffect(() => {
    const fetchShort = async () => {
      const { data } = await axios.get(`/api/categoryItems/shorts/${id}`)

      setShort(data)
    }

    fetchShort()
  }, [])
  useEffect(() => {
    const fetchTshirt = async () => {
      const { data } = await axios.get(`/api/categoryItems/tshirts/${id}`)

      setTshirt(data)
    }

    fetchTshirt()
  }, [])
  useEffect(() => {
    const fetchNewArrival = async () => {
      const { data } = await axios.get(`/api/categoryItems/newArrival/${id}`)

      setNewArrival(data)
    }

    fetchNewArrival()
  }, [])

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
      ) : tee ? (
        // Mapping Per tee ids
        <>
          <Row>
            <Col md={6}>
              <Image src={tee.image} alt={tee.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{tee.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {tee.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{tee.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={tee.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={tee.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem className='mt-5' style={{ border: 'none' }}>
                  <p>{tee.desc_texture}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{tee.desc_weight}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{tee.desc_info}</p>
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
      ) : tshirt ? (
        // Mapping Per tshirt ids
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
                  <h3>₦ {tshirt.price}</h3>
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
                    style={{ border: 'none' }}
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
                <ListGroupItem>
                  <p>{tshirt.description}</p>
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
      ) : newArrival ? (
        // Mapping Per newArrival ids
        <>
          <Row>
            <Col md={6}>
              <Image src={newArrival.image} alt={newArrival.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{newArrival.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {newArrival.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{newArrival.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={newArrival.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={newArrival.countInStock === 0}>
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
      ) : hoodie ? (
        // Mapping Per hoodies ids
        <>
          <Row>
            <Col md={6}>
              <Image src={hoodie.image} alt={hoodie.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{hoodie.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {hoodie.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{hoodie.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={hoodie.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={hoodie.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem className='mt-5' style={{ border: 'none' }}>
                  <p>{hoodie.desc_1}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{hoodie.desc_2}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{hoodie.desc_3}</p>
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
      ) : set ? (
        // Mapping Per set ids
        <>
          <Row>
            <Col md={6}>
              <Image src={set.image} alt={set.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{set.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {set.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{set.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={set.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={set.countInStock === 0}>
                    Buy Now!
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <p>{set.description}</p>
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
      ) : pant ? (
        <>
          <Row>
            <Col md={6}>
              <Image src={pant.image} alt={pant.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{pant.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {pant.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{pant.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={pant.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={pant.countInStock === 0}>
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
      ) : short ? (
        <>
          <Row>
            <Col md={6}>
              <Image src={short.image} alt={short.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>{short.name}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <h3>₦ {short.price}</h3>
                </ListGroupItem>
                <ListGroupItem
                  className='text-center'
                  style={{ border: 'none' }}>
                  <p>{short.info}</p>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={short.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem style={{ border: 'none' }}>
                  <Button
                    className='btn-block btn-light btn-xl'
                    type='button'
                    disabled={short.countInStock === 0}>
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
