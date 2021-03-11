import styles from './Book.module.css';

const Book = (props) => {
    const {title, author, price} = props.book;
    return (
        <li className={styles.book}>
            <h1 className="book-title">{title}</h1>
            <h2>Author: {author}</h2>
            <h5>Price: <span className={styles.price}>{price}</span></h5>
        </li>
    );
}

export default Book;