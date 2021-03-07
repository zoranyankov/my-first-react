/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import Book from './Book';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bookList">
                <h1>TOTAL COUNT OF BOOKS</h1>
                <h1>MY LIST OF BOOKS</h1>
                <ul className="books">
                    {this.props.allBooks.map(b => <Book book={b} />)}
                </ul>
            </div>
        );
    }
}

export default BookList;