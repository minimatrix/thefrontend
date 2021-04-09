import React, { useState } from 'react';
import { Button, Flex, Heading, Stack, Input, Text } from '@chakra-ui/react';

import { useLogin } from '../../hooks';

export default function SignIn({ ...props }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { status, handleLogin } = useLogin();

  const validateLoginForm = () => {};

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
          Login
        </Heading>

        <Text>Login to your Bridge account to view and manage your invoices</Text>

        <Input placeholder="Email" size="md" autoComplete={'off'} value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Password" size="md" type="password" value={password} onChange={e => setPassword(e.target.value)} />

        <Button
          size="md"
          rounded="md"
          color={['primary.500', 'primary.500', 'white', 'white']}
          bg={['white', 'white', 'primary.500', 'primary.500']}
          _hover={{
            bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
          }}
          onClick={() => email && password && handleLogin({ email, password })}
        >
          Login
        </Button>
      </Stack>
    </Flex>
  );
}
