import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import SingleMovieComponent from './SingleMovieComponent'
import Spinner from 'react-bootstrap/Spinner'

function RowMovieComponent({ Categoria }) {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const doFetch = async () => {
      try {
        const response = await fetch(
          'http://www.omdbapi.com/?apikey=efe20984&s=' + Categoria
        )
        if (!response.ok) {
          throw new Error('qualcosa è andato storto')
        }
        const data = await response.json()
        setFilms(data.Search)
        setIsLoading(false)
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }
    doFetch()
  }, [Categoria])

  const filmView = films.slice(0, 6)

  if (isLoading) {
    return (
      <div>
        {' '}
        <Spinner animation="border" variant="danger" />
      </div>
    )
  }

  if (error) {
    return <div>Errore: {error}</div>
  }

  return (
    <Row key={Categoria} className="row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
      {filmView.map((film) => (
        <SingleMovieComponent
          Src={film.Poster}
          movieId={film.imdbID}
          key={film.imdbID}
        />
      ))}
    </Row>
  )
}

export default RowMovieComponent
