import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <Navbar expand='false' bg='light' className='px-4'>
        <Container fluid>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbarLabel-expand-false'
            placement='start'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id='offcanvasNavbarLabel-expand-false'
                style={{ fontSize: '20px' }}>
                Bintus Store
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <LinkContainer to='/'>
                  <Nav.Link className='nav-link py-2'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/catalog'>
                  <Nav.Link className='nav-link py-2'>Shop Now!</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/size-chart'>
                  <Nav.Link className='nav-link py-2'>Size Chart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/faq'>
                  <Nav.Link className='nav-link py-2'>FAQ</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link className='nav-link py-2'>
                    About Bintus Store
                  </Nav.Link>
                </LinkContainer>
                <NavDropdown
                  title='Account'
                  id={`offcanvasNavbarDropdown-expand-$'false`}>
                  <LinkContainer to='/login'>
                    <NavDropdown.Item>Log in</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to='/register'>
                    <NavDropdown.Item>Create Account</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Link to='/'>
            <img
              className='img-responsive img-fit'
              src='/logo_bs.jpg'
              width='250'
              height='200'
              alt='Bintus Store logo'
            />
          </Link>
          <Nav className='d-flex flex-row'>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>
                </Nav.Link>
              </LinkContainer>
            )}
            <Link to='/cart'>
              <i className='fa-sharp fa-solid fa-cart-shopping mt-3 mx-3'></i>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
