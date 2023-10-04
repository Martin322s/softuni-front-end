import { BookListItem } from './BookListItem';

export const BookList = (props) => {
    return (
        <ul>
            <BookListItem book={props.books[0]} />
            <BookListItem book={props.books[1]} />
            <BookListItem book={props.books[2]} />
            <BookListItem book={props.books[3]} />
            <BookListItem book={props.books[4]} />
        </ul>
    );
}