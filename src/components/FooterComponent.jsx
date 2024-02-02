import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

function FooterComponent() {
  return (
    <>
      <Container>
        <Row className="justify-content-start text-start mt-5">
          <Col className="mb-2">
            <Facebook className="me-2" />
            <Instagram className="me-2" />
            <Twitter className="me-2" />
            <Youtube className="me-2" />
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 text-start">
          <Col>
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Audio and Subtitles
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Media Center
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Contact us
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Audio Description
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Investor Relations
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Legal Notices
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Cookie Preferences
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Gift Cards
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Corporate Information
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className=" mb-2 text-start">
            <button
              type="button"
              className="btn btn-sm border border-secondary-subtle footer-button rounded-0 mt-3"
            >
              Service Code
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 mt-2 copyright text-start">
            © 1997-2023 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterComponent
