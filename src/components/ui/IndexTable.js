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

const IndexTable = ({ dataRows, headings, ...props }) => {
  return (
    <Box>
      <Heading as="h3" size="md">
        Users
      </Heading>
      <Box as={Table} size="sm" variant="striped" marginTop={5}>
        <Thead>
          <Tr>
            {headings &&
              headings.map(heading => {
                return <Th>{heading}</Th>;
              })}
          </Tr>
        </Thead>
        <Tbody>
          {dataRows &&
            dataRows.map(dataRow => {
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
