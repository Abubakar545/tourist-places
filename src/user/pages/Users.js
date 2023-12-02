import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Syed Abubakar siddiq',
      image:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/The_Ka%27ba%2C_Great_Mosque_of_Mecca%2C_Saudi_Arabia_%284%29.jpg',
      places: 45
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
