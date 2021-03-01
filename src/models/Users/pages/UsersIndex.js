import React, { useRef, useState } from 'react';
import useUsers from '../hooks/useUsers';
import IndexTable from '../../../components/ui/IndexTable';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerFooter,
  Stack,
  Box,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

const UsersIndex = () => {
  const { users, createUser, refetchIndex } = useUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headings = ['First Name', 'Surname', 'Email', 'Date Created'];

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const dataRows =
    users &&
    users.map(user => {
      return {
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        created_at: user?.createdAt,
      };
    });

  const firstNameRef = useRef();

  return (
    <>
      <Box d="flex" justifyContent="flex-end">
        <Button onClick={onOpen}>Create User</Button>
      </Box>
      <IndexTable dataRows={dataRows} headings={headings} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstNameRef}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Create a new user
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">First Name</FormLabel>
                  <Input
                    ref={firstNameRef}
                    id="username"
                    placeholder="Please enter first name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="lastname">Last Name</FormLabel>
                  <Input
                    id="lastname"
                    placeholder="Please enter last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Please enter email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  createUser({
                    inputs: {
                      first_name: firstName,
                      last_name: lastName,
                      email,
                    },
                  });
                  refetchIndex();
                  onClose();
                }}
                colorScheme="blue"
              >
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default UsersIndex;
