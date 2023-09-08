import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import axios from 'axios'

const NewArrivals = () => {
  const [newArrivalItems, setNewArrivalItems] = useState([])

  useEffect(() => {
    const fetchNewArrivalItems = async () => {
      const { data } = await axios.get('/api/product/newArrivals')

      setNewArrivalItems(data.data)
    }

    fetchNewArrivalItems()
  }, [])

  return (
    <>
      <div className='custom-margin'>
        {newArrivalItems.map((newArrival) => (
          <div xs={6} md={4} key={newArrival._id} className='text-center'>
            <Link
              to={`/categoryItems/${newArrival.category}/${newArrival._id}`}>
              {newArrival.countInStock === 0 ? (
                <div position-relative>
                  <div className='row position-absolute right-0'>
                    <div className='circle d-flex align-items-center justify-content-center'>
                      <p className='circle-text '>
                        Sold
                        <br /> Out
                      </p>
                    </div>
                  </div>
                  <Image
                    src={newArrival.image}
                    className='img-fluid component-images lighter'
                    style={{ height: '350px', width: 'auto' }}
                  />
                </div>
              ) : (
                <Image
                  src={newArrival.image}
                  className='img-fluid component-images darker'
                  style={{ height: '350px', width: 'auto' }}
                />
              )}
            </Link>

            <div>
              <Link
                to={`/categoryItems/${newArrival.category}/${newArrival._id}`}
                style={{ textDecoration: 'none' }}>
                <h4
                  style={{
                    color: 'black',
                    width: '350px',
                  }}
                  className='text-capitalize my-3'>
                  {newArrival.name}
                </h4>
                <h3 style={{ color: 'black' }}>
                  - ₦{newArrival.price.toLocaleString('en-US')}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default NewArrivals
