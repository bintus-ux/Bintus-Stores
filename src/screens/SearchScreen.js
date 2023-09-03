import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Image } from 'react-bootstrap'
import { listCapItems } from '../actions/capActions'

const SearchScreen = () => {
  let { keyword } = useParams()
  console.log(keyword)
  const dispatch = useDispatch()

  const capList = useSelector((state) => state.capList)
  const { loading, error, capItems, itemPage, pages } = capList

  useEffect(() => {
    dispatch(listCapItems(keyword))
  }, [dispatch, keyword])
  return (
    <>
      <Row>
        {capItems && (
          <div className='custom-margin'>
            {capItems.map((capItem) => (
              <div xs={6} md={4} key={capItem._id} className='text-center'>
                <Link to={`/categoryItems/${capItem.category}/${capItem._id}`}>
                  {capItem.countInStock === 0 ? (
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
                        src={capItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={capItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${capItem.category}/${capItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {capItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{capItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Row>
    </>
  )
}

export default SearchScreen
