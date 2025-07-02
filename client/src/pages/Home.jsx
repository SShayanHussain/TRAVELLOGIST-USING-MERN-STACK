import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Destinations</h2>
        <p className="text-gray-600">Discover our most popular travel packages</p>
      </section>
    </>
  );
};

export default Home;
