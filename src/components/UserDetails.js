import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../data/user';

const UserDetail = () => {
  const { userId } = useParams();
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetail;
