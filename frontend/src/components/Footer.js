import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              Copyright &copy; RaiShop
              <span> Delveloped by </span>
              <span style={{ color: 'white', background: 'red', paddingLeft:5, paddingRight:5 }}>
                ING AFTER60
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
