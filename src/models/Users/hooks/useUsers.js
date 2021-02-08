import React, { useState } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState({});

  const fetchUsers = () => {
    setUsers(data);
  };

  return {
    users,
    fetchUsers,
  };
};

export default useUsers;
