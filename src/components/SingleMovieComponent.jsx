import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SingleMovieComponent({ Src, movieId }) {
  return (
    <>
      {' '}
      <Col className=" mb-2 text-center px-1">
        <Link to={`/movie-details/${movieId}`}>
          <img className="img-fluid" src={Src} alt="movie" />
        </Link>
      </Col>
    </>
  )
}

export default SingleMovieComponent
