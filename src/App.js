import { Container } from 'react-bootstrap'
import './App.css'
import NavComponent from './components/NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import GenresComponent from './components/GenresComponent'
import RowMovieComponent from './components/RowMovieComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TvShowComponent from './components/TvShowComponent'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <>
      {' '}
      <Router>
        <div className="App">
          <header>
            <NavComponent />
          </header>
          <main>
            <Container fluid className="px-3">
              <GenresComponent />
              <h2 className="text-light text-start ">Trending Now</h2>
              <RowMovieComponent unica={1} Categoria="star wars" />
              <h2 className="text-light text-start ">Watch it Again</h2>
              <RowMovieComponent unica={2} Categoria="rambo" />
              <h2 className="text-light text-start ">New Releases</h2>
              <RowMovieComponent unica={3} Categoria="naruto" />{' '}
              <Routes>
                <Route path="/" element={<TvShowComponent />} />
                <Route path="/tvshowcomponent" element={<TvShowComponent />} />
                <Route
                  path="/movie-details/:movieId"
                  element={<MovieDetails />}
                />
              </Routes>
            </Container>
          </main>
          <footer>
            <FooterComponent />
          </footer>
        </div>{' '}
      </Router>
    </>
  )
}

export default App
