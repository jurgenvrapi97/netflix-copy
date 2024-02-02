import { Row, Col, Dropdown, ButtonGroup } from 'react-bootstrap'
import { Grid, Grid3x3 } from 'react-bootstrap-icons'
function GenresComponent() {
  return (
    <Row className="justify-content-between">
      <Col className="d-flex">
        <h2 className="mb-4 text-light">TV Shows</h2>

        <ButtonGroup>
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              className="rounded-0"
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </Col>
      <Col className="d-flex justify-content-end">
        <Grid className="text-light me-4" />
        <Grid3x3 className="text-light" />
      </Col>
    </Row>
  )
}

export default GenresComponent
