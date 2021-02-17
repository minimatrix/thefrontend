import React from 'react';

import {
  Box,
  Table,
  Tbody,
  Tfoot,
  Thead,
  Tr,
  Th,
  Td,
  Heading,
} from '@chakra-ui/react';

const IndexTable = ({ data }) => {
  const fields = data && data.length > 0 && Object.keys(data[0]);

  return (
    <Box>
      <Heading as="h3" size="md">
        Users
      </Heading>
      <Box as={Table} size="sm" variant="striped" marginTop={5}>
        <Thead>
          <Tr>
            {fields &&
              fields.map(field => {
                return <Th>{field}</Th>;
              })}
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            Object.values(data).map(dataRow => {
              return (
                <Tr>
                  {Object.values(dataRow).map(record => (
                    <Td>{record}</Td>
                  ))}
                </Tr>
              );
            })}
        </Tbody>
      </Box>
    </Box>
  );
};

export default IndexTable;
