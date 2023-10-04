import { useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import movies from './movies.json';

function App() {
    const [moviesData, setMovies] = useState([]);

    useEffect(() => {
        setMovies(movies);
    }, []);

    const deleteMovieHandler = (_id) => setMovies(moviesData.filter(x => x._id !== _id));

    return (
        <div className="App">
            <MoviesList movies={moviesData} deleteMovieHandler={deleteMovieHandler} />
        </div>
    );
}

export default App;