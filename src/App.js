import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';

const Books = [
  {
    title: 'IT',
    author: 'Stephen King',
    price: '20',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzzane Collins',
    price: '10',
  }
]

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BookList allBooks={Books} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
