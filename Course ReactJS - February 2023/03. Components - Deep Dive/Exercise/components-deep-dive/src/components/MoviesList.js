import { useId } from 'react';
import { MoviesListItem } from "./MoviesListItem";

export function MoviesList({ movies, deleteMovieHandler }) {
    let id = useId();

    return (
        <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {movies.map(x => 
                <MoviesListItem 
                    key={id + x.title + x.year} 
                    {...x} 
                    deleteMovieHandler={deleteMovieHandler}
                />
            )}
        </ul>
    );
}