import style from './Header.module.css';
import logo from '../logo.svg';
import {
    Link
} from "react-router-dom";

const Header = (props) => {
    // let match

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <nav className={style.navbar}>
                <Link to="/" className={style['navbar-brand']}>Books</Link>
                {/* <a className={style['navbar-brand']} href="home">Books</a> */}


                <ul className={style['navbar-nav']}>
                    {/* {{#if isLogged}} */}
                    <li className={style['nav-item']}>
                        <Link to="/profile" > Welcome, {'email'} </Link>
                        {/* <a className={style['nav-link']} id="welcome-item" href="home"></a> */}
                    </li>
                    <li className={style['nav-item']}>
                        <Link to="/auth/logout" > Logout</Link>
                        {/* <a className={style['nav-link']} id="logout-link" href="logout">Logout</a> */}
                    </li>
                    {/* {{else}} */}
                    <li className={style['nav-item']}>
                        <Link to="/auth/login" > Login</Link>
                        {/* <a className={style['nav-link']} id="login-link" href="login">Login</a> */}
                    </li>
                    <li className={style['nav-item']}>
                        <Link to="/auth/register" > Register</Link>
                        {/* <a className={style['nav-link']} id="register-link" href="register">Register</a> */}
                    </li>
                    {/* {{/if}} */}
                </ul>
            </nav >
        </div>
    )
}

export default Header;