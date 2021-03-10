import { Component } from 'react';
import style from '../auth/Register.module.css';

class Register extends Component {

    render() {
        return (
            <form className={style["form-container"]} id="register-form">
                <div className={style["form-group"]}>
                    <label for="email">Email</label>
                    <input type="email" className={style["form-control"]} placeholder="Email" name="email" value="" />
                </div>
                <div className={style["form-group"]}>
                    <label for="password">Password</label>
                    <input type="password" className={style["form-control"]} placeholder="Password" name="password" value="" />
                </div>

                <div className={style["form-group"]}>
                    <label for="repeatPassword">Repeat Password</label>
                    <input type="password" className={style["form-control"]} placeholder="Repeat-Password" name="repeatPassword" value="" />
                </div>

                <button type="submit" className={style["btn btn-primary"]} onclick="onRegisterSubmit(event)">Register</button>
            </form>
        );
    }
}

export default Register;