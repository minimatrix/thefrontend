import React from 'react';

import LandingLayout from '../components/layouts/LandingLayout';
import { Heading, Box } from '@chakra-ui/react';
import ContactForm from '../components/sections/ContactForm';

export default function Contact() {
  return (
    <LandingLayout>
      <ContactForm />
    </LandingLayout>
  );
}
