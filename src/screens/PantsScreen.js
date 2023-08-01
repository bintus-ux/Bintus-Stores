import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { pantsItems } from '../products_folder/products'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const PantsScreen = () => {
  const [pantsItem, setPantsItem] = useState([...pantsItems])
  const [sortingOption, setSortingOption] = useState('asc') // default: ascending

  const handleSortingOptionChange = (e) => {
    setSortingOption(e.target.value)
  }

  // function to sort the data based on the selected sorting option
  const sortPantsItem = () => {
    const sortedPantsItem = [...pantsItem]
    if (sortingOption === 'asc') {
      sortedPantsItem.sort()
    } else if (sortingOption === 'desc') {
      sortedPantsItem.sort().reverse()
    }
    setPantsItem(sortedPantsItem)
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Caps
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
      </div>
      {/* <select
          class='selectpicker'
          name='sort_by'
          aria-label='.form-select-lg example'
          data-width='100%'
          onChange={handleSortingOptionChange}
          value={sortingOption}>
          <option value='manual'>Featured</option>
          <option value='best-selling'>Best selling</option>
          <option value='asc'> Alphabetically, A-Z</option>
          <option value='desc'>Alphabetically, Z-A</option>
          <option value='price-ascending'>Price, low to high</option>
          <option value='price-descending'>Price, high to low</option>
          <option value='created-ascending'>Date, old to new</option>
          <option value='created-descending'>Date, new to old</option>
        </select> */}
      <div className='text-center my-5'>
        <Dropdown>
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
        </Dropdown>
      </div>
      <Row>
        <div className='custom-margin'>
          {pantsItems.map((pantsItem) => (
            <div xs={6} md={4} key={pantsItem._id} className='text-center'>
              <Link to={`/categoryItem/${pantsItem.category}/${pantsItem._id}`}>
                <Image
                  src={pantsItem.image}
                  className='img-fluid component-images darker'
                  style={{ height: '450px', width: 'auto' }}
                />
              </Link>

              <div>
                <Link
                  to={`/categoryItem/${pantsItem.category}/${pantsItem._id}`}
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
