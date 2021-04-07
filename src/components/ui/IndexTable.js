import React from 'react';
import { Box, Table, Tbody, Tfoot, Thead, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const IndexTable = ({ dataRows, headings, linkField, linkParam, route, ...props }) => {
  return (
    <Box>
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
                  {Object.keys(dataRow).map(key => {
                    return key !== 'id' && <Td>{dataRow[linkParam] ? <Link to={`/${route}/${dataRow[linkParam]}`}>{`${dataRow[key] ?? '-'}`}</Link> : `${dataRow[key] ?? '-'}`}</Td>;
                  })}
                </Tr>
              );
            })}
        </Tbody>
      </Box>
    </Box>
  );
};

export default IndexTable;
