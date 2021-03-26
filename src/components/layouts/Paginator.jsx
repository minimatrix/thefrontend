import React from 'react';
import { Box, Circle, Text } from '@chakra-ui/react';

const Paginator = ({ currentPage, nextPage, previousPage, limit, total, onPaginate, ...props }) => {
  const PageLink = ({ linkNumber, currentPage }) => {
    return (
      <Circle size="25px" border={linkNumber == currentPage ? 'gray.300' : ' solid 1px gray.900'} background={linkNumber == currentPage ? 'gray.300' : 'gray.100'}>
        <Text
          cursor="pointer"
          onClick={() => {
            onPaginate(linkNumber);
          }}
        >
          {linkNumber}
        </Text>
      </Circle>
    );
  };

  const totalPages = Math.ceil(total / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Box d={'flex'} flexDirection={'row'}>
      {pages.map(page => {
        return <PageLink linkNumber={page} currentPage={currentPage} />;
      })}
    </Box>
  );
};

export default Paginator;
