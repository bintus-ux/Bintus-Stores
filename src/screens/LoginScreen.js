import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let location = useLocation()
  let navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  // toggle visiblity for password

  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword)
  }

  return (
    <FormContainer>
      <div className='text-center my-2'>
        <h1>Sign In Form</h1>
      </div>
      <hr />
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        {/* <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group> */}
        <label for='password-input'>Email</label>
        <div className='input-group'>
          <div className='form-div'>
            <input
              type='email'
              placeholder='Enter email'
              value={email}
              id='email'
              className='input-form'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <label for='password-input'>Password</label>
        <div className='input-group'>
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
              <span onClick={handlePasswordToggle} className='mt-2'>
                {showPassword ? (
                  <i className='fa-regular fa-eye-slash'></i>
                ) : (
                  <i className='fa-regular fa-eye'></i>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* <div>
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordToggle}>
            {showPassword ? (
              <i className='fa-regular fa-eye-slash'></i>
            ) : (
              <i className='fa-regular fa-eye'></i>
            )}
          </button>
        </div> */}

        <div className='row my-4'>
          <div className='col d-flex justify-content-center'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='form1Example3'
                checked
              />
              <label className='form-check-label mt-2' for='form1Example3'>
                {' '}
                Remember me{' '}
              </label>
            </div>
          </div>

          <div className='col mt-2'>
            <a href='#!'>Forgot password?</a>
          </div>
        </div>

        <div className='d-grid gap-2 my-3'>
          <button className='btn btn-primary' type='submit'>
            Sign In
          </button>
        </div>
      </Form>

      <Row className='py-3'>
        <Col>
          New Here? why not{' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            style={{ color: 'blue' }}>
            Register
          </Link>{' '}
          real quick.
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
