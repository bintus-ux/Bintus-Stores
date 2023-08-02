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
  capItems,
  teesItems,
  footwearItems,
  tshirtItems,
} from '../products_folder/products'
const ItemScreen = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const cap = capItems.find((p) => p.linkName === id)
  const tees = teesItems.find((p) => p.linkName === id)
  const footwear = footwearItems.find((p) => p.linkName === id)
  const tshirts = tshirtItems.find((p) => p.linkName === id)

  return (
    <>
      <button className='btn btn-light my-3' onClick={() => navigate(-1)}>
        Go Back
      </button>
      {cap ? (
        <>
          <Row>
            <Col md={6}>
              <Image src={cap.image} alt={cap.name} fluid />
            </Col>
            <Col md={6} className='text-center'>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h3>{cap.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <h3>₦ {cap.price}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <p>{cap.info}</p>
                </ListGroupItem>
                <ListGroupItem>
                  <Button
                    className='btn-block btn-xl'
                    type='button'
                    disabled={cap.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroupItem>
                <ListGroupItem>
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
              <i style={{ color: 'red' }} className='fas fa-star'></i>
              <i style={{ color: 'red' }} className='fas fa-star'></i>
              <i style={{ color: 'red' }} className='fas fa-star'></i>
              <i style={{ color: 'red' }} className='fas fa-star'></i>
              <i style={{ color: 'red' }} className='fas fa-star'></i>
              <p>Be the first to write a review!</p>
            </Col>
            <Col md={6}>
              <Button className='btn-block btn-light btn-xl' type='button'>
                Write a review!!
              </Button>
            </Col>
          </Row>
        </>
      ) : tees ? (
        <Row>
          <Col md={6}>
            <Image src={tees.image} alt={tees.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>{tees.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <h3>₦ {tees.price}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <p>{tees.info}</p>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-block btn-primary btn'
                  type='button'
                  disabled={tees.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
            <hr />
          </Col>
        </Row>
      ) : footwear ? (
        <Row>
          <Col md={6}>
            <Image src={footwear.image} alt={footwear.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>{footwear.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <h3>₦ {footwear.price}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <p>{footwear.info}</p>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-block btn-xl btn'
                  type='button'
                  disabled={footwear.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
            <hr />
          </Col>
        </Row>
      ) : tshirts ? (
        <Row>
          <Col md={6}>
            <Image src={tshirts.image} alt={tshirts.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>{tshirts.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <h3>₦ {tshirts.price}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <p>{tshirts.info}</p>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-block btn-xl btn'
                  type='button'
                  disabled={tshirts.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
            <hr />
          </Col>
        </Row>
      ) : (
        ''
      )}
    </>
  )
}

export default ItemScreen
