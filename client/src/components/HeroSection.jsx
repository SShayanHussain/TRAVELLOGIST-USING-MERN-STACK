import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white" style={{ backgroundImage: `url('/hero-pakistan.jpg')` }}>
      <div className="bg-black bg-opacity-60 p-6 rounded">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Pakistan & Beyond</h1>
        <p className="text-lg">Plan your Umrah, local tours, and international getaways — all in one place.</p>
      </div>
    </div>
  );
};

export default HeroSection;
