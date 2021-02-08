import React from 'react';
import useUsers from '../hooks/useUsers';

const UsersIndex = () => {
  const { users } = useUsers();

  return (
    <>
      {users &&
        users.map(user => {
          console.log({ user });
          return <div>users</div>;
        })}
    </>
  );
};

export default UsersIndex;
