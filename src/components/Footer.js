import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/"><img src={facebook} alt="Icon" /></a>
              <a href="https://www.instagram.com/"><img src={instagram} alt="Icon" /></a>
              <a href="https://twitter.com/?lang=en"><img src={twitter} alt="Icon" /></a>
            </div>
            <p>For Project Purposes 2024 All Rights Reserved</p>
          </Col>

                </Row>
            </Container>
        </footer>
    )
    }