'use client'
// src/app/components/UserForm.js
import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('/api/users', {
                username,
                email,
            });

            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                setMessage(error.response.data.error);
            } else {
                // Something happened in setting up the request that triggered an Error
                setMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Add User</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default UserForm;
