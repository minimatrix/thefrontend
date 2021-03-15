import React, { useState, useEffect } from 'react';
import { useModelIndex, useModel } from '../../../hooks';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const { data, pagination, success, status, refetch: refetchIndex } = useModelIndex({
    modelName: 'users',
    params: {},
  });

  const { status: createStatus, refetch: refetchModel, createModelInstance, model } = useModel({
    modelName: 'users',
  });

  const fetchUsersIndex = () => {
    refetchIndex();
  };

  const createUser = async ({ inputs, ...props }) => {
    await createModelInstance({ inputs });
  };

  useEffect(() => {
    fetchUsersIndex();
  }, []);

  return {
    users: data,
    pagination,
    fetchUsersIndex,
    refetchIndex: page => refetchIndex(page),
    createUser,
    createStatus,
  };
};

export default useUsers;
