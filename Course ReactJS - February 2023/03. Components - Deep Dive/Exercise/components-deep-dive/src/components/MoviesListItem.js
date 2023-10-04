import { useEffect } from "react";

export function MoviesListItem({ _id, title, year, description, deleteMovieHandler }) {

    useEffect(() => {
        console.log(`Movie ${title} - mounted`);
    }, [title]);

    useEffect(() => {
        return () => {
            console.log(`movie ${title} - unmounted`);
        }
    }, [title]);

    return (
        <li>
            <article
                style={{
                    width: '300px',
                    height: '250px',
                    border: '1px solid black',
                    padding: '15px 20px',
                    marginBottom: '10px'
                }}
            >
                <h2 style={{ textAlign: 'center' }}>{title}</h2>
                <h4 style={{ textAlign: 'center' }}>{year}</h4>
                <p>{description}</p>
                <button onClick={() => deleteMovieHandler(_id)}>Delete</button>
            </article>
        </li>
    );
}