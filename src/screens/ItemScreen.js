import { Link } from 'react-router-dom'
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
  const { id } = useParams()
  const cap = capItems.find((p) => p._id === id)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
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
