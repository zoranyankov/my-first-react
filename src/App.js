// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Auth from './components/auth/Auth';
import Booklist from './components/books/Booklist';
// import Input from './components/Input';
// import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

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
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/auth/register"> */}
          <Route path="/auth">
            <Auth />
            {/* <Register /> */}
          </Route>
          {/* <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/logout">
            <Logout />
          </Route> */}
        </Switch>
        {/* <header className="App-header"></header> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Form></Form> */}
        {/* <Input></Input> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h2>Home</h2>
      <Booklist allBooks={Books} />
    </div>
  );
}

// function Register() {
//   return <h2>Register</h2>;
// }

// function Login() {
//   return <h2>Login</h2>;
// }

function Logout() {
  return <h2>Logout</h2>;
}


export default App;
