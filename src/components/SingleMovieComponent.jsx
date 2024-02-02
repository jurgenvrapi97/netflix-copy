import React from 'react'
import { Col } from 'react-bootstrap'

function SingleMovieComponent(props) {
  return (
    <Col className=" mb-2 text-center px-1">
      <img className="img-fluid" src={props.Src} alt="movie" />
    </Col>
  )
}

export default SingleMovieComponent
