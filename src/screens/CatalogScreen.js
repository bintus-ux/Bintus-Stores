import React from 'react'
import categoryItems from '../products_folder/categoryItems'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CatalogScreen = () => {
  return (
    <>
      <Container fluid>
        <div>
          <h2 className='text-center text-capitalize font-italic'>Catalog</h2>
        </div>
        <hr />
        <Row>
          <div className='custom-margin'>
            {categoryItems.map((categoryItem) => (
              <div
                xs={6}
                md={4}
                className='position-relative row justify-content-end'>
                <div>
                  <Link to={`/categoryItem/${categoryItem._id}`}>
                    <Image
                      src={categoryItem.image}
                      className='img-fluid component-images darker'
                    />
                  </Link>

                  <div className='position-absolute top-50 start-50 translate-middle text-center'>
                    <Link
                      to={`/categoryItem/${categoryItem._id}`}
                      style={{ textDecoration: 'none' }}>
                      <h3 className='text-light'>{categoryItem.text}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default CatalogScreen
