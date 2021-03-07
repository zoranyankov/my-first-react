const Book = (props) => {
    const {title, author, price} = props.book;
    return (
        <li className="book">
            <h1 className="book-title">{title}</h1>
            <h2>Author: {author}</h2>
            <h5>Price: {price}</h5>
        </li>
    );
}

export default Book;