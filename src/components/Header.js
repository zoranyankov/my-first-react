import style from './Header.module.css';
import logo from '../logo.svg';

const Header = (props) =>
    <nav className={style.navbar}>
        <a className={style['navbar-brand']} href="home">Movies</a>

        <img src={logo} className="App-logo" alt="logo" />

        <ul className={style['navbar-nav']}>
            {/* {{#if isLogged}} */}
            <li className={style['nav-item']}>
                <a className={style['nav-link']} id="welcome-item" href="home">Welcome, { 'email' }</a>
            </li>
            <li className={style['nav-item']}>
                <a className={style['nav-link']} id="logout-link" href="logout">Logout</a>
            </li>
            {/* {{else}} */}
            <li className={style['nav-item']}>
                <a className={style['nav-link']} id="login-link" href="login">Login</a>
            </li>
            <li className={style['nav-item']}>
                <a className={style['nav-link']} id="register-link" href="register">Register</a>
            </li>
            {/* {{/if}} */}
        </ul>
    </nav>

export default Header;