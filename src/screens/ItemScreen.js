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
import { capItems } from '../products_folder/products'
const ItemScreen = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const cap = capItems.find((p) => p._id === id)

  return (
    <>
      <button className='btn btn-light my-3' onClick={() => navigate(-1)}>
        Go Back
      </button>
      <Row>
        <Col md={6}>
          <Image src={cap.image} alt={cap.name} fluid />
        </Col>
        <Col md={3}>
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
                className='btn-block btn-md btn'
                type='button'
                disabled={cap.countInStock === 0}>
                Add To Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
          <hr />
        </Col>
      </Row>
    </>
  )
}

export default ItemScreen
