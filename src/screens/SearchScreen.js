import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Image } from 'react-bootstrap'
import { searchProducts } from '../actions/productActions'

const SearchScreen = () => {
  let { keyword } = useParams()
  const dispatch = useDispatch()

  const searchProduct = useSelector((state) => state.productSearch)
  const { data } = searchProduct

  useEffect(() => {
    dispatch(searchProducts(keyword))
  }, [keyword, dispatch])
  return (
    <>
      <Row>
        <div className='custom-margin'>
          {data?.map((item) => (
            <div xs={6} md={4} key={item._id} className='text-center'>
              <Link to={`/categoryItems/${item.category}/${item._id}`}>
                {item.countInStock === 0 ? (
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
                      src={item.image}
                      className='img-fluid component-images lighter'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  </>
                ) : (
                  <Image
                    src={item.image}
                    className='img-fluid component-images darker'
                    style={{ height: '450px', width: 'auto' }}
                  />
                )}
              </Link>

              <div>
                <Link
                  to={`/categoryItems/${item.category}/${item._id}`}
                  style={{ textDecoration: 'none' }}>
                  <h4
                    style={{ color: 'black' }}
                    className='text-capitalize my-3'>
                    {item.name}
                  </h4>
                  <h4 style={{ color: 'black' }}>- ₦{item.price}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Row>
      {/* <Row>
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
        {teeItems && (
          <div className='custom-margin'>
            {teeItems.map((teeItem) => (
              <div xs={6} md={4} key={teeItem._id} className='text-center'>
                <Link to={`/categoryItems/${teeItem.category}/${teeItem._id}`}>
                  {teeItem.countInStock === 0 ? (
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
                        src={teeItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={teeItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${teeItem.category}/${teeItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {teeItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{teeItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {tshirtItems && (
          <div className='custom-margin'>
            {tshirtItems.map((tshirtItem) => (
              <div xs={6} md={4} key={tshirtItem._id} className='text-center'>
                <Link
                  to={`/categoryItems/${tshirtItem.category}/${tshirtItem._id}`}>
                  {tshirtItem.countInStock === 0 ? (
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
                        src={tshirtItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={tshirtItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${tshirtItem.category}/${tshirtItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {tshirtItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{tshirtItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {pantItems && (
          <div className='custom-margin'>
            {pantItems.map((pantItem) => (
              <div xs={6} md={4} key={pantItem._id} className='text-center'>
                <Link
                  to={`/categoryItems/${pantItem.category}/${pantItem._id}`}>
                  {pantItem.countInStock === 0 ? (
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
                        src={pantItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={pantItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${pantItem.category}/${pantItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {pantItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{pantItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {setItems && (
          <div className='custom-margin'>
            {setItems.map((setItem) => (
              <div xs={6} md={4} key={setItem._id} className='text-center'>
                <Link to={`/categoryItems/${setItem.category}/${setItem._id}`}>
                  {setItem.countInStock === 0 ? (
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
                        src={setItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={setItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${setItem.category}/${setItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {setItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{setItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {footwearItems && (
          <div className='custom-margin'>
            {footwearItems.map((footWearItem) => (
              <div xs={6} md={4} key={footWearItem._id} className='text-center'>
                <Link
                  to={`/categoryItems/${footWearItem.category}/${footWearItem._id}`}>
                  {footWearItem.countInStock === 0 ? (
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
                        src={footWearItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={footWearItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${footWearItem.category}/${footWearItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {footWearItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{footWearItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {knitwearItems && (
          <div className='custom-margin'>
            {knitwearItems.map((knitWearItem) => (
              <div xs={6} md={4} key={knitWearItem._id} className='text-center'>
                <Link
                  to={`/categoryItems/${knitWearItem.category}/${knitWearItem._id}`}>
                  {knitWearItem.countInStock === 0 ? (
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
                        src={knitWearItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={knitWearItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${knitWearItem.category}/${knitWearItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {knitWearItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{knitWearItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {hoodieItems && (
          <div className='custom-margin'>
            {hoodieItems.map((hoodieItem) => (
              <div xs={6} md={4} key={hoodieItem._id} className='text-center'>
                <Link
                  to={`/categoryItems/${hoodieItem.category}/${hoodieItem._id}`}>
                  {hoodieItem.countInStock === 0 ? (
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
                        src={hoodieItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={hoodieItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${hoodieItem.category}/${hoodieItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {hoodieItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{hoodieItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {shortItems && (
          <div className='custom-margin'>
            {shortItems.map((shortItem) => (
              <div xs={6} md={4} key={shortItem._id} className='text-center'>
                <Link
                  to={`/categoryItems/${shortItem.category}/${shortItem._id}`}>
                  {shortItem.countInStock === 0 ? (
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
                        src={shortItem.image}
                        className='img-fluid component-images lighter'
                        style={{ height: '450px', width: 'auto' }}
                      />
                    </>
                  ) : (
                    <Image
                      src={shortItem.image}
                      className='img-fluid component-images darker'
                      style={{ height: '450px', width: 'auto' }}
                    />
                  )}
                </Link>

                <div>
                  <Link
                    to={`/categoryItems/${shortItem.category}/${shortItem._id}`}
                    style={{ textDecoration: 'none' }}>
                    <h4
                      style={{ color: 'black' }}
                      className='text-capitalize my-3'>
                      {shortItem.name}
                    </h4>
                    <h4 style={{ color: 'black' }}>- ₦{shortItem.price}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Row> */}
    </>
  )
}

export default SearchScreen
