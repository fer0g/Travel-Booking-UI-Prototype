import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturedDestinations } from '../components/FeaturedDestinations';
export const Home = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedDestinations />
    </div>;
};