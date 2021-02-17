import React from 'react';

import Hero from '../components/sections/Hero';
import LandingLayout from '../components/layouts/LandingLayout';

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Agile Customer Feedback"
        subtitle="Allow your customers to leave feedback and easily report bugs on any element of your React application at the click of a button."
        image="https://source.unsplash.com/800x600/?coding"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
