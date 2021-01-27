import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Input,
} from '@chakra-ui/react';

export default function SignIn({ ...props }) {
  return (
    <Flex
      // align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...props}
    >
      <Stack spacing={4}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Login
        </Heading>

        <Input placeholder="Email" size="md" />
        <Input placeholder="Password" size="md" isInvalid={true} />

        <Button
          size="md"
          rounded="md"
          color={['primary.500', 'primary.500', 'white', 'white']}
          bg={['white', 'white', 'primary.500', 'primary.500']}
          _hover={{
            bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
          }}
        >
          Login
        </Button>
      </Stack>
    </Flex>
  );
}
