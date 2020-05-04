import React, { useState } from 'react';

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const changeFunction = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitFunction = e => {
        e.preventDefault();
        console.log('Register Submit');
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={submitFunction}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={changeFunction} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={changeFunction} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={changeFunction} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={changeFunction} />
                </div>
                <input type="submit" value="Register" className="btn btn-block btn-primary"/>
            </form>
        </div>
    )
}

export default Register;
