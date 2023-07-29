import React from 'react'
import { footwearItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const FootwearScreen = () => {
  return (
    <>
      <Row>
        <div className='custom-margin'>
          {footwearItems.map((footwearItem) => (
            <div xs={6} md={4} key={footwearItem._id}>
              <Link to={`/footwear/${footwearItem._id}`}>
                <Image
                  src={footwearItem.image}
                  className='img-fluid component-images darker'
                />
              </Link>

              <div>
                <Link to={`/footwear/${footwearItem._id}`}>
                  <h3 style={{ color: 'black' }}>{footwearItem.name}</h3>
                  <h3 style={{ color: 'black' }}>${footwearItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default FootwearScreen
