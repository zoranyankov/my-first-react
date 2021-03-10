// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Input from './components/Input';
import Form from './components/Form';

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
      <Header />
      {/* <header className="App-header"></header> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Form></Form> */}
        {/* <Input></Input> */}
        <BookList allBooks={Books} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
