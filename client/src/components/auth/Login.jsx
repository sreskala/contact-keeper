import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alerts/alertContext';

const Login = props => {

    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {

        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);


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
        if(email === '' || password === '' ) {
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                email,
                password
            });
        }
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={submitFunction}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={changeFunction} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={changeFunction} required />
                </div>
                <input type="submit" value="Login" className="btn btn-block btn-primary"/>
            </form>
            <h2>New user? Click <Link to="/register">here</Link> </h2>
        </div>
    )
}

export default Login;
