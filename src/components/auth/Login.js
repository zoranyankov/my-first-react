import { Component } from 'react';
import style from '../auth/Login.module.css';

class LoginForm extends Component {

    render() {
        return (
            <div className="containter">

                <form className={style["form-container"]} id="login-form">
                    <div className={style["form-group"]}>
                        <label for="email">Email</label>
                        <input type="email" className={style["form-control"]} placeholder="Email" name="email" value="" />

                    </div>
                    <div className={style["form-group"]}>
                        <label for="password">Password</label>
                        <input type="password" className={style["form-control"]} placeholder="Password" name="password" value="" />
                    </div>
                    <button type="submit" className={style["btn btn-primary"]} >Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;