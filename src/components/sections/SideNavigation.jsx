import React from 'react';
import {
  Link,
  Route,
  BrowserRouter,
  Switch,
  useHistory,
} from 'react-router-dom';
import { Box, Flex, Text, Button, VStack, Heading } from '@chakra-ui/react';
import { useAuth } from '@hooks';
// import Logo from '../ui/Logo';

const MenuItem = ({ to, ...props }) => {
  return (
    <Box
      as={Link}
      w="100%"
      ml="4"
      to={to}
      alignContent="center"
      textAlign="center"
      p="1"
      _hover={{ bg: 'white', borderLeftRadius: '2xl', color: 'gray.800' }}
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
    <VStack
      as="nav"
      wrap="wrap"
      w="140px"
      // bg={['primary.500', 'primary.500']}
      h="90vh"
      pl="4"
      color="white"
      {...props}
    >
      <Heading as="h3" size="md" mb="10">
        LOGO
      </Heading>

      <MenuItem to="/dashboard">Dashboard</MenuItem>
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
