import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SideNavigation from '../../components/sections/SideNavigation';
import { UsersIndex } from '../../models/Users';

export default function CMSLayout(props) {
  return (
    <>
      <Box bg="#EEF1F7">
        {/* header bar */}
        <Flex direction="row" px={10} justifyContent="flex-end" py={5}>
          <Box>Welcome back!</Box>
        </Flex>
        <Flex direction="row" borderRadius="2xl" shadow="xl" bg="white" mx={10}>
          <BrowserRouter>
            <Box as={SideNavigation} shadow="xl" borderLeftRadius="xl" pt="5" />
            <Box p="5" bg="white" width="100%" borderRightRadius="xl">
              <Switch>
                <Route path="/users">
                  <Switch>
                    <Route path={`/users/:id`}>
                      {navigation => {
                        const { id } = navigation.match.params;
                        return <>{id}</>;
                      }}
                    </Route>
                    <Route>
                      <UsersIndex />
                    </Route>
                  </Switch>
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
