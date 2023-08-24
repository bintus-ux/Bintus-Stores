import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  register,
  getUserDetails,
  updateUserProfile,
} from '../actions/userActions'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  let navigate = useNavigate()

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  // toggle visiblity for password

  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword)
  }

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  // clear input field for password

  const handleClearPassword = () => {
    setPassword('')
  }

  const handleClearConfirmPassword = () => {
    setConfirmPassword('')
  }

  return (
    <Row>
      <Col md={3}>
        <div className='text-center my-4'>
          <h2>User Profile</h2>
        </div>
        <hr />
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && (
          <Message variant='success'>Profile Updated Successfully!</Message>
        )}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <label
            for='name'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Name:
          </label>
          <div className='input-group'>
            <div className='form-div'>
              <input
                type='name'
                placeholder='Enter name'
                value={name}
                id='name'
                className='input-form'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <label
            for='email-input'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Email Address:
          </label>
          <div className='input-group'>
            <div className='form-div'>
              <input
                type='email'
                placeholder='Enter email'
                value={email}
                id='email-input'
                className='input-form'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <label
            for='password'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Password:
          </label>
          <div
            className='input-group'
            style={{ backgroundColor: 'rgb(240, 239, 239)' }}>
            <div className='form-div'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                id='password-input'
                className='input-form'
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='form-icon'>
                <span onClick={handleClearPassword} className='mt-2'>
                  {password && (
                    <i
                      className='fa-solid fa-circle-xmark'
                      style={{ color: 'grey' }}></i>
                  )}
                </span>
              </div>
              <div className='form-icon'>
                <span onClick={handlePasswordToggle} className='mt-2'>
                  {showPassword ? (
                    <i className='fa-regular fa-eye'></i>
                  ) : (
                    <i className='fa-regular fa-eye-slash'></i>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Re-enter Password Field */}

          <label
            for='confirmPassword'
            className='my-2'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Confirm Password:
          </label>
          <div
            className='input-group'
            style={{ backgroundColor: 'rgb(240, 239, 239)' }}>
            <div className='form-div'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Enter password'
                value={confirmPassword}
                id='confirmPassword'
                className='input-form'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className='form-icon'>
                <span onClick={handleClearConfirmPassword} className='mt-2'>
                  {confirmPassword && (
                    <i
                      className='fa-solid fa-circle-xmark'
                      style={{ color: 'grey' }}></i>
                  )}
                </span>
              </div>
              <div className='form-icon'>
                <span onClick={handleConfirmPasswordToggle} className='mt-2'>
                  {showConfirmPassword ? (
                    <i className='fa-regular fa-eye'></i>
                  ) : (
                    <i className='fa-regular fa-eye-slash'></i>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div class='col-md-12 text-left' style={{ width: 'auto' }}>
            <button
              type='submit'
              variant='primary'
              className='btn py-2 my-3'
              style={{ backgroundColor: 'rgb(206, 136, 136)', color: 'black' }}>
              Update
            </button>
          </div>
        </Form>
      </Col>
      <Col md={9} className='text-center' style={{ width: '900px' }}>
        <div className='my-4'>
          <h2>My Orders</h2>
          <hr />
        </div>

        <div className='row' id='order-list-wrapper'>
          <div className='row' id='order-header-wrapper'>
            <button
              className='col btn active-order-list btn-sm'
              type='button'
              md={3}>
              <h5>Delivered</h5>
            </button>
            <button
              className='col btn-secondary btn-sm'
              type='button'
              md={3}
              style={{ border: 'none' }}>
              <h5>Processing</h5>
            </button>
            <button
              className='col btn-secondary btn-sm'
              type='button'
              md={3}
              style={{ border: 'none' }}>
              <h5>Cancelled</h5>
            </button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProfileScreen
