import React from 'react';
import { Table } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export default function Users() {
  const { data: users, fetchData } = useAPI();

  return <Box>The users index</Box>;
}
