import GenresComponent from './GenresComponent'
import RowMovieComponent from './RowMovieComponent'

function AllMovies() {
  return (
    <>
      <GenresComponent />
      <h2 className="text-light text-start ">Trending Now</h2>
      <RowMovieComponent unica={1} Categoria="star wars" />
      <h2 className="text-light text-start ">Watch it Again</h2>
      <RowMovieComponent unica={2} Categoria="rambo" />
      <h2 className="text-light text-start ">New Releases</h2>
      <RowMovieComponent unica={3} Categoria="naruto" />
    </>
  )
}

export default AllMovies
