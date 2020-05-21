import React from 'react'

const About = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                About this app
            </h1>
            <h3>Built with Node and Express on the backend, MongoDB for DB handling of users and contacts. React on the front-end. </h3>
            <h3>Used bcrypt hashing with JSONWebToken for authentication.</h3>
            <p style={{textAlign:"center"}}>Sam Reskala {year}&copy; </p>
        </div>
    )
}

export default About;