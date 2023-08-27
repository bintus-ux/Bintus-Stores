import React from 'react'
import { Nav, NavItem, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutStepsRow = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <div className='checkout-steps'>
        <NavItem>
          {step1 ? (
            <LinkContainer to='/login'>
              <NavLink className={step1 ? 'active' : ''}>Sign In</NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled style={{ borderTop: '0.3rem solid ' }}>
              Sign In
            </NavLink>
          )}
        </NavItem>

        <NavItem>
          {step2 ? (
            <LinkContainer to='/shipping'>
              <NavLink className={step2 ? 'active' : ''}>Shipping</NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled>Shipping</NavLink>
          )}{' '}
        </NavItem>

        <NavItem>
          {step3 ? (
            <LinkContainer to='/payment'>
              <NavLink className={step3 ? 'active' : 'non-active'}>
                Payment
              </NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled style={{ borderTop: '0.3rem solid #9d611b' }}>
              Payment
            </NavLink>
          )}
        </NavItem>

        <NavItem>
          {step4 ? (
            <LinkContainer to='/placeorder'>
              <NavLink className={step4 ? 'active' : 'non-active'}>
                Place Order
              </NavLink>
            </LinkContainer>
          ) : (
            <NavLink disabled style={{ borderTop: '0.3rem solid #9d611b' }}>
              Place Order
            </NavLink>
          )}
        </NavItem>
      </div>
    </Nav>
  )
}

export default CheckoutStepsRow
