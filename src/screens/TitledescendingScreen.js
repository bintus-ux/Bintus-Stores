import React from 'react'
import { useLocation } from 'react-router-dom'
import { pantsItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const TitledescendingScreen = () => {
  const descending_order = pantsItems.sort((a, b) =>
    b.name.localeCompare(a.name)
  )
  return (
    <>
      <Row>
        <div className='custom-margin'>
          {descending_order.map((productItem) => (
            <div xs={6} md={4} key={productItem._id} className='text-center'>
              <Link to={`/categoryItem/product/${productItem._id}`}>
                <Image
                  src={productItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/categoryItem/product/${productItem._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-capitalize'>
                    {productItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{productItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default TitledescendingScreen
