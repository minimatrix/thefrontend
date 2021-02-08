import React, { useState } from 'react';
import { useModelIndex } from '../../../hooks';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});

  const { data, meta, status, refetch } = useModelIndex({
    modelName: 'users',
    params: {},
  });

  const fetchUsersIndex = () => {
    setUsers(data);
  };

  // const fetchUser = () => {
  //   setUser();
  // };

  return {
    users,
    // user,
    fetchUsersIndex,
    // fetchUser,
  };
};

export default useUsers;
