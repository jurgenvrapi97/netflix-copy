import { Component } from 'react'
import { Row } from 'react-bootstrap'
import SingleMovieComponent from './SingleMovieComponent'

class RowMovieComponent extends Component {
  state = {
    films: [],
  }

  doFetch = () => {
    fetch('http://www.omdbapi.com/?apikey=efe20984&s=' + this.props.Categoria)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.error('qualcosa è andato storto')
        }
      })
      .then((data) => {
        this.setState({ films: data.Search })
      })
      .catch((error) => {
        throw new error.error()
      })
  }
  componentDidMount() {
    this.doFetch()
  }
  render() {
    this.state.films.map((film) => {
      console.log(film.Title)
    })
    const filmView = this.state.films.slice(0, 6)
    return (
      <Row
        key={this.props.Categoria}
        className="row-cols-sm-2 row-cols-md-3 row-cols-lg-6 "
      >
        {filmView.map((film) => (
          <SingleMovieComponent Src={film.Poster} key={film.imdbID} />
        ))}
      </Row>
    )
  }
}

export default RowMovieComponent
