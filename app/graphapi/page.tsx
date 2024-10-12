'use client';
import { FormEvent, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import client from '../lib/apolloClient'; // Adjust the path based on where you saved apolloClient.js

// Define the mutation to accept variables
const INSERT_USER = gql`
mutation insertIntousersCollection($objects: [usersInsertInput!]!) {
  insertIntousersCollection(objects: $objects) {
    affectedCount
  }
}
`;

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [insertUser] = useMutation(INSERT_USER, { client });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            // Prepare the objects array for the mutation
            const objects = [{ username, email }];

            // Call the mutation with the objects
            const { data } = await insertUser({ variables: { objects } });

            // Log the response data
            console.log('User added:', data);


        } catch (error) {
            console.error('Error adding user:', error);
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
        </form>
    );
};

export default function Home() {
    return (
        <div>
            <h1>Add User</h1>
            <UserForm />
        </div>
    );
}
