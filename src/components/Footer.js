import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/infojobs.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jos%C3%A9-manuel-toledo-guti%C3%A9rrez-9659541b3/"
                target="_Blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/jmtolgut"
                target="_Blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="http://www.infojobs.net/josemanuel-toledo-gutierrez.prf">
                <img src={navIcon3} alt="infojobs" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
