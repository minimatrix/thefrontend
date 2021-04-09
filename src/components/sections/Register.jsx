import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Image, Heading, Stack, Text, Input } from '@chakra-ui/react';

export default function Register({ ...props }) {
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
        <Heading as="h1" size="xl" fontWeight="bold" color="primary.600" textAlign={['center', 'center', 'left', 'left']}>
          Create your account
        </Heading>

        <Input placeholder="First Name" size="md" />
        <Input placeholder="Last Name" size="md" />
        <Input placeholder="Email address" size="md" />
        <Input type="password" placeholder="Password" size="md" />
        <Input type="password" placeholder="Confirm Password" size="md" />
        <Button
          size="md"
          rounded="md"
          color={['primary.500', 'primary.500', 'white', 'white']}
          bg={['white', 'white', 'primary.500', 'primary.500']}
          _hover={{
            bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
          }}
        >
          Create Account
        </Button>
      </Stack>
    </Flex>
  );
}
