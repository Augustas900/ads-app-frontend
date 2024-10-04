// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Our Application</h1>
            <p>Please choose an option:</p>
            <div>
                <Link to="/login">
                    <button style={{ margin: '10px' }}>Log In</button>
                </Link>
                <Link to="/register">
                    <button style={{ margin: '10px' }}>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
