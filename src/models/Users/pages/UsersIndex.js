import React from 'react';
import useUsers from '../hooks/useUsers';
import IndexTable from '../../../components/ui/IndexTable';

const UsersIndex = () => {
  const { users } = useUsers();

  return (
    <>
      <IndexTable data={users} fields={[]} />
      {/* {users &&
        users.map(user => {
          return <div>{user.first_name}</div>;
        })} */}
    </>
  );
};

export default UsersIndex;
