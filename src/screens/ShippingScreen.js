import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/payment')
  }

  return (
    <>
      <FormContainer>
        <div className='row my-5'>
          <div className='col-12'>
            <h2 className='display-4 text-center text-capitalize font-italic'>
              Shipping{' '}
            </h2>
            <hr className='border border-primary ' />
          </div>
        </div>
        <Form onSubmit={submitHandler}>
          <label
            for='address'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Address:
          </label>
          <div className='input-group'>
            <div className='form-div'>
              <input
                type='text'
                placeholder='Enter address'
                value={address}
                required
                id='address'
                className='input-form'
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <label
            for='city'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            City:
          </label>
          <div className='input-group'>
            <div className='form-div'>
              <input
                type='text'
                placeholder='Enter city'
                value={city}
                required
                id='city'
                className='input-form'
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <label
            for='postalcode'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Postal Code:
          </label>
          <div className='input-group'>
            <div className='form-div'>
              <input
                type='text'
                placeholder='Enter postal code'
                value={postalCode}
                required
                id='postalcode'
                className='input-form'
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>

          <label
            for='country'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Country:
          </label>
          <div className='input-group'>
            <div className='form-div'>
              <input
                type='text'
                placeholder='Enter country'
                value={country}
                required
                id='country'
                className='input-form'
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <Button type='submit' variant='primary' className='mt-3'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default ShippingScreen
