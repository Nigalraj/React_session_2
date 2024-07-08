import React from 'react';
import { Link } from 'react-router-dom';
import users from '../data/user';

const Users = () => (
  <div>
    <h1>Users</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Users;
