import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'

const CartScreen = () => {
  const [itemCount, setItemCount] = useState(1)

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
            <i className='fa-sharp fa-solid fa-cart-shopping mx-3'></i>
            <div className='btn-group' role='group' aria-label='button group'>
              <button type='button' className='btn btn-danger'>
                <i className='fa-solid fa-plus'></i>
              </button>
              <button type='button' className='btn btn-secondary'>
                <i className='fa-solid fa-minus'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CartScreen
