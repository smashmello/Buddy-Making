import React, { useState } from 'react';
import './Login.css';  // Import the CSS for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to check the credentials, for now, we will just log the values
        if (username === 'admin' && password === 'password123') {
            alert('Login successful!');
        } else {
            setErrorMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Enter your username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="input-group">
                    <button type="submit" className="btn">Login</button>
                </div>

                <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    );
};

export default Login;