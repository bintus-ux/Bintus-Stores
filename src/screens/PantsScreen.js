import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Row, Image } from 'react-bootstrap'
import axios from 'axios'

const PantsScreen = () => {
  const [pantsItems, setPantsItems] = useState([])

  useEffect(() => {
    const fetchPantsItems = async () => {
      const { data } = await axios.get('/api/categoryItems/pants')

      setPantsItems(data)
    }

    fetchPantsItems()
  }, [])

  const isFound = pantsItems.some((pant) => {
    if (pant._id) {
      return true
    }
    return false
  })

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {isFound ? (
        <>
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
          <div className='text-center my-5'>
            <Dropdown>
              <Dropdown.Toggle variant='dark' id='dropdown-basic'>
                Date, old to new
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to='/categoryItem/pants/featured_order'>
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
                  <Link
                    to={`/categoryItem/${pantsItem.category}/${pantsItem.linkName}`}>
                    {pantsItem.countInStock === 0 ? (
                      <>
                        <div className='row justify-content-left'>
                          <div className='circle d-flex align-items-center justify-content-center'>
                            <p className='circle-text position-absolute'>
                              Sold
                              <br /> Out
                            </p>
                          </div>
                        </div>
                        <Image
                          src={pantsItem.image}
                          className='img-fluid component-images lighter'
                          style={{ height: '450px', width: 'auto' }}
                        />
                      </>
                    ) : (
                      <Image
                        src={pantsItem.image}
                        className='img-fluid component-images darker'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    )}
                  </Link>

                  <div>
                    <Link
                      to={`/categoryItem/${pantsItem.category}/${pantsItem.linkName}`}
                      style={{ textDecoration: 'none' }}>
                      <h3
                        style={{ color: 'black' }}
                        className='text-capitalize'>
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
      ) : (
        <div className='container my-5'>
          <div className='row'>
            <div className='col-12'>
              <p className='display-4 text-center font-italic'>
                Sorry, there are no available items in this collection.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PantsScreen
