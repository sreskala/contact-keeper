import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const changeFunction = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitFunction = e => {
        e.preventDefault();
        console.log('Login Submit');
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={submitFunction}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={changeFunction} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={changeFunction} />
                </div>
                <input type="submit" value="Login" className="btn btn-block btn-primary"/>
            </form>
            <h2>New user? Click <Link to="/register">here</Link> </h2>
        </div>
    )
}

export default Login;
