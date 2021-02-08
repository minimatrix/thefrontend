import React from 'react';

import Hero from '@components/sections/Hero';
import LandingLayout from '@components/layouts/LandingLayout';

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Freedom to create"
        subtitle="This is where a slogan could go to sell your brand and make your product enticing to potential customers"
        image="https://source.unsplash.com/800x600/?software-developer"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
