import React from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { Box, Flex, Text, Button, VStack, Heading } from '@chakra-ui/react';
import { useAuth } from '../../hooks';
// import Logo from '../ui/Logo';

const MenuItem = ({ to, ...props }) => {
  return (
    <Box
      as={NavLink}
      width="100%"
      to={to}
      alignContent="center"
      textAlign="center"
      position="relative"
      p="2"
      _hover={{ bg: 'white', borderLeftRadius: '2xl', color: 'gray.800' }}
      activeStyle={{
        background: 'white',
        color: '#1a202c',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        before: {
          content: `""`,
          position: 'absolute',
          bg: '#3acc9d',
          top: '-20px',
          width: '25px',
          height: '20px',
          right: '0px',
          borderBottomRightRadius: '25px',
          boxShadow: '6px 6px 0 0px white',
        },
      }}
    >
      {props.children}
    </Box>
  );
};

const SideNavigation = props => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const history = useHistory();

  const auth = useAuth();

  const logout = () => {
    auth.dispatch({ type: 'clear' });
    history.push('/');
  };

  return (
    <VStack as="nav" wrap="wrap" w="140px" bg={['primary.400']} h="90vh" pl="4" color="white" {...props}>
      <Heading as="h3" size="md" mb="10">
        LOGO
      </Heading>

      <MenuItem to="/dashboard">Dashboard</MenuItem>
      <MenuItem to="/articles">Articles</MenuItem>
      <MenuItem to="/users">Users</MenuItem>
      <Box
        bg="gray.700"
        pl="2"
        pr="2"
        fontSize="xs"
        borderRadius="xl"
        onClick={() => {
          logout();
        }}
        _hover={{ cursor: 'pointer' }}
      >
        Logout
      </Box>
    </VStack>
  );
};

export default SideNavigation;
