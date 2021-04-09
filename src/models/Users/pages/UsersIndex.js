import React from 'react';
import useUsers from '../hooks/useUsers';
import useInputField from '../../../hooks/useInputField';
import IndexTable from '../../../components/ui/IndexTable';
import InputField from '../../../components/inputs/InputField';
import Paginator from '../../../components/layouts/Paginator';
import { Heading, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerHeader, DrawerFooter, Stack, Box, Text, useDisclosure } from '@chakra-ui/react';

import moment from 'moment';

const UsersIndex = () => {
  const { users, createUser, refetchIndex, pagination } = useUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headings = ['First Name', 'Surname', 'Email', 'Date Created'];

  const firstNameInput = useInputField({
    type: 'first_name',
    name: 'first_name',
    label: 'First name',
    validationRules: [
      {
        type: 'required',
      },
    ],
  });

  const lastNameInput = useInputField({
    type: 'last_name',
    name: 'last_name',
    label: 'Last name',
    validationRules: [
      {
        type: 'required',
      },
    ],
  });

  const emailInput = useInputField({
    type: 'email',
    name: 'email',
    label: 'Email',
    validationRules: [
      {
        type: 'required',
      },
    ],
  });

  const dataRows =
    users &&
    users.map(user => {
      return {
        id: user?.id,
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        created_at: moment(user?.createdAt).format('DD/MM/YYYY h:m:s'),
      };
    });

  return (
    <>
      <Box d="flex" justifyContent="flex-end">
        <Button size="sm" onClick={onOpen}>
          Create User
        </Button>
      </Box>
      <Heading as="h3" size="md">
        Users
      </Heading>
      <IndexTable dataRows={dataRows} headings={headings} linkField="name" linkParam="id" route="users" />
      <Box mt="2">{pagination && <Paginator mt="2" {...pagination} onPaginate={page => refetchIndex(page)} />}</Box>

      <Drawer isOpen={isOpen} placement="right" initialFocusRef={firstNameInput.inputRef} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Create a new user</DrawerHeader>

            <DrawerBody>
              <Stack spacing="8px">
                <InputField {...firstNameInput} />
                <InputField {...lastNameInput} />
                <InputField {...emailInput} />
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  const formIsValid =
                    [firstNameInput, lastNameInput, emailInput]
                      .map(input => {
                        return input.validate();
                      })
                      .filter(result => result == false).length < 1;

                  if (formIsValid) {
                    createUser({
                      inputs: {
                        first_name: firstNameInput.value,
                        last_name: lastNameInput.value,
                        email: emailInput.value,
                      },
                    });
                    refetchIndex();
                    onClose();
                  } else {
                    console.log('form not valid');
                  }
                }}
                colorScheme="green"
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