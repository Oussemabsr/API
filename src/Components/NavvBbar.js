import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavvBbar = () => {
  return (
    <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">CHKPT - API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavvBbar