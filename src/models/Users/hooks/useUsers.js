import React, { useState, useEffect } from 'react';
import { useModelIndex } from '../../../hooks';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const { data, meta, status, refetch } = useModelIndex({
    modelName: 'users',
    params: {},
  });

  const fetchUsersIndex = () => {
    refetch();
  };

  useEffect(() => {
    fetchUsersIndex();
  }, []);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return {
    users,
    fetchUsersIndex,
  };
};

export default useUsers;
