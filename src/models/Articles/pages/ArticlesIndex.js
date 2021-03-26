import React from 'react';
import useArticles from '../hooks/useArticles';
import useInputField from '../../../hooks/useInputField';
import IndexTable from '../../../components/ui/IndexTable';
import InputField from '../../../components/inputs/InputField';
import Paginator from '../../../components/layouts/Paginator';
import { Heading, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerHeader, DrawerFooter, Stack, Box, Text, useDisclosure } from '@chakra-ui/react';

import moment from 'moment';

const ArticlesIndex = () => {
  const { articles, createArticle, refetchIndex, pagination } = useArticles();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headings = ['Name', 'Heading', 'Tags', 'Category', 'Status', 'Publish Date'];

  const nameInput = useInputField({
    type: 'text',
    name: 'name',
    label: 'Name',
    validationRules: [
      {
        type: 'required',
      },
    ],
  });

  const dataRows =
    articles &&
    articles.map(article => {
      return {
        id: article?.id,
        name: article?.name,
        heading: article?.heading,
        published: article?.published,
      };
    });

  return (
    <>
      <Box d="flex" justifyContent="flex-end">
        <Button size="sm" onClick={onOpen}>
          Create Article
        </Button>
      </Box>
      <Heading as="h3" size="md">
        Articles
      </Heading>
      <IndexTable dataRows={dataRows} headings={headings} linkField="name" linkParam="id" route="articles" />
      <Box mt="2">{pagination && <Paginator mt="2" {...pagination} onPaginate={page => refetchIndex(page)} />}</Box>

      <Drawer isOpen={isOpen} placement="right" initialFocusRef={nameInput.inputRef} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Create a new article</DrawerHeader>

            <DrawerBody>
              <Stack spacing="8px">
                <InputField {...nameInput} />
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  const formIsValid =
                    [nameInput]
                      .map(input => {
                        return input.validate();
                      })
                      .filter(result => result == false).length < 1;

                  if (formIsValid) {
                    createArticle({
                      inputs: {
                        name: nameInput.value,
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

export default ArticlesIndex;
