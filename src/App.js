import { Container } from 'react-bootstrap'
import './App.css'
import NavComponent from './components/NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TvShowComponent from './components/TvShowComponent'
import MovieDetails from './components/MovieDetails'
import AllMovies from './components/AllMovie'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavComponent />
        </header>
        <main>
          <Container fluid className="px-3">
            <Routes>
              <Route path="/" element={<AllMovies />} />
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
      </div>
    </Router>
  )
}

export default App
