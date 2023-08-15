import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container, Badge } from 'react-bootstrap'

const CartScreen = () => {
  const [itemCount, setItemCount] = useState(1)

  function CustomBadge({ itemCount }) {
    return <Badge variant='secondary'>{itemCount}</Badge>
  }
  return (
    <Container fluid>
      <div className='row my-5'>
        <div className='col-12'>
          <h2 className='display-4 text-center text-capitalize font-italic'>
            Cart Items{' '}
          </h2>
          <hr className='border border-primary ' />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex justify-content-around col-12'>
          <div>
            <p style={{ fontSize: '20px' }}>Cart item</p>
          </div>
          <div>
            {/* <i className='fa-sharp fa-solid fa-cart-shopping mx-3'>
              {' '}
              <CustomBadge
                itemCount={itemCount}
                className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
              />
            </i> */}
            <div className='position-relative'>
              <i className='fa-sharp fa-solid fa-cart-shopping mx-5'>
                <span
                  className='position-absolute badge top-0 bg-danger border border-light rounded-circle'
                  rounded-pill>
                  {itemCount}
                </span>
              </i>

              <div className='btn-group' role='group' aria-label='button group'>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => {
                    setItemCount(itemCount + 1)
                  }}>
                  <i className='fa-solid fa-plus'></i>
                </button>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={() => {
                    setItemCount(Math.max(itemCount - 1, 0))
                  }}>
                  <i className='fa-solid fa-minus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CartScreen
