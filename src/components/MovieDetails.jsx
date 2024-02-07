import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function MovieDetails() {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [comments, setComments] = useState([])
  const [show, setShow] = useState('true')
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=efe20984&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))

    fetch('https://striveschool-api.herokuapp.com/api/comments/' + movieId, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTY3OTViMjYxNTAwMTk4YTY5MzkiLCJpYXQiOjE3MDY3OTI1NjksImV4cCI6MTcwODAwMjE2OX0.2Kcnmg6dO93u-YQ9-ga8gq5gU0Q-eegXZz0z_7tG1XU',
      },
    })
      .then((response) => response.json())
      .then((data) => setComments(data))
  }, [movieId])

  const handleClose = () => {
    setShow(false)

    navigate('/')
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movieDetails.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid" src={movieDetails.Poster} alt="movie" />
        <p>{movieDetails.Plot}</p>
        <h5>Comments</h5>
        {comments.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
      </Modal.Body>
    </Modal>
  )
}

export default MovieDetails
