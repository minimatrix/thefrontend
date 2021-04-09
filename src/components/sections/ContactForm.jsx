import React, { useState } from 'react';
import { Button, Flex, Heading, Stack, Input, Textarea } from '@chakra-ui/react';

import { useEnquiry } from '../../hooks';

export default function ContactForm({ ...props }) {
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [query, setQuery] = useState();
  // const { status, submitEnquiry } = useContactForm();

  return (
    <Flex align="center" justify={{ base: 'center' }} direction={{ base: 'column-reverse', md: 'row' }} wrap="no-wrap" minH="70vh" px={8} width={'100vw'} backgroundPosition="bottom" backgroundImage={['none', 'none', 'url(balls.svg)']} backgroundRepeat="no-repeat" {...props}>
      <Stack spacing={4}>
        <Heading as="h1" size="xl" fontWeight="bold" color="primary.800" textAlign={['center', 'center', 'left', 'left']}>
          Dont be shy, ask us anything!
        </Heading>

        <Input placeholder="Name" size="md" autoComplete={'off'} value={name} onChange={e => setName(e.target.value)} />
        <Input placeholder="Organisation" size="md" autoComplete={'off'} value={company} onChange={e => setCompany(e.target.value)} />
        <Input placeholder="Email" size="md" autoComplete={'off'} value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Phone" size="md" autoComplete={'off'} value={phone} onChange={e => setPhone(e.target.value)} />
        <Textarea placeholder="Enter the details of your query here..." size="md" value={query} isInvalid={false} onChange={e => setQuery(e.target.value)} />

        <Button
          size="md"
          rounded="md"
          color={['primary.500', 'primary.500', 'white', 'white']}
          bg={['white', 'white', 'primary.500', 'primary.500']}
          _hover={{
            bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
          }}
          // onClick={() => email && password && handleLogin({ email, password })}
        >
          Submit enquiry
        </Button>
      </Stack>
    </Flex>
  );
}
