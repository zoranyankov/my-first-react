/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import Book from './Book';
import Button from './Button';
import styles from './Booklist.module.css';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bookList">
                <h1 className={styles.title1}>TOTAL COUNT OF BOOKS</h1>
                <Button></Button>
                <h1 className={styles.title2}>MY LIST OF BOOKS</h1>
                <ul className="books">
                    {this.props.allBooks.map(b => <Book key={b.title.concat(b.description)} book={b} />)}
                </ul>
            </div>
        );
    }
}

export default BookList;