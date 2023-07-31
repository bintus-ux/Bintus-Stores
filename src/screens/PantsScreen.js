import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { pantsItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const PantsScreen = () => {
  return (
    <>
      <div className='text-center my-5'>
        <div>
          <h2 className='text-capitalize font-italic'>Pants</h2>
        </div>
        <select
          class='selectpicker'
          aria-label='.form-select-lg example'
          data-width='100%'>
          <option selected>Date, old to new</option>
          <option selected>Date, new to old</option>
          <option value='1'>Featured</option>
          <option value='2'> Alphabetically, A-Z</option>
          <option value='3'>Alphabetically, Z-A</option>
          <option value='3'>Price, low to high</option>
          <option value='3'>Price, high to low</option>
          <option value='3'>Date, old to new</option>
          <option value='3'>Date, new to old</option>
        </select>
        {/* <Dropdown>
          <Dropdown.Toggle variant='dark' id='dropdown-basic'>
            Date, old to new
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/categoryItem/pants/featured_order'>
              Featured
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/categoryItem/pants/title-ascending_order'>
              Alphabetically, A-Z
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/categoryItem/pants/title-descending_order'>
              Alphabetically, Z-A
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/categoryItem/pants/price-ascending_order'>
              Price, low to high
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/categoryItem/pants/price-descending_order'>
              Price, high to low
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/categoryItem/pants/created-ascending_order'>
              Date, old to new
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/categoryItem/pants/created-descending_order'>
              Date, new to old
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
      <Row>
        <div className='custom-margin'>
          {pantsItems.map((pantsItem) => (
            <div xs={6} md={4} key={pantsItem._id} className='text-center'>
              <Link to={`/pants/${pantsItem._id}`}>
                <Image
                  src={pantsItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/pants/${pantsItem._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'black' }} className='text-capitalize'>
                    {pantsItem.name}
                  </h3>
                  <h3 style={{ color: 'black' }}>- ₦{pantsItem.price}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default PantsScreen
