export const BookListItem = (props) => {
    return <li>{props.book.title} --- {props.book.year} --- {props.book.author}</li>
}