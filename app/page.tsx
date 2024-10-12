'use client'
import React, { FormEvent, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post('https://check-fast-postgre.vercel.app/add-user', {
        username,
        email,
      });

      if (response.data.status === "User added successfully") {
        setMessage('User added successfully!');
        setError(null); // Clear any previous errors
        // Clear the form fields

      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default HomePage;
