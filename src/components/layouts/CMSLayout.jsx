import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SideNavigation from '../../components/sections/SideNavigation';
import { useResource } from '../../hooks';
import { UsersIndex } from '../../models/Users';
// import Footer from '../sections/Footer'; // will add this in the part 2

export default function CMSLayout(props) {
  const { callAPI: fetchUsers } = useResource({ modelName: 'users' });

  // fetchUsers({ method: 'get' });

  return (
    <>
      <Box bg="#EEF1F7">
        <Flex direction="row" px={10} justifyContent="flex-end" py={5}>
          <Box>Hello</Box>
        </Flex>
        <Flex direction="row" borderRadius="2xl" shadow="xl" bg="white" mx={10}>
          <BrowserRouter>
            <Box
              as={SideNavigation}
              shadow="xl"
              bg="#0146FD"
              borderLeftRadius="xl"
              pt="5"
            />
            <Box p="5" bg="white" width="100%" borderRightRadius="xl">
              <Switch>
                <Route path="/users">
                  <UsersIndex />
                </Route>
                <Route path="/dashboard">
                  <div>
                    <Heading as="h3" size="md">
                      Dashboard
                    </Heading>
                  </div>
                </Route>
              </Switch>
            </Box>
          </BrowserRouter>
        </Flex>
      </Box>
    </>
  );
}
