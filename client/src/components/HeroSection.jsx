import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const words = ['Umrah', 'Local Tours', 'International Getaways'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const updatedText = isDeleting
      ? currentWord.substring(0, displayText.length - 1)
      : currentWord.substring(0, displayText.length + 1);

    setTypingSpeed(isDeleting ? 60 : 120);

    const timeout = setTimeout(() => {
      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="hero">
      <div className="overlay">
        <div className="bg-opacity-60 text-center">
        
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Explore Pakistan & Beyond</h1>
          <p className="text-2xl text-white">
            Plan your <span className="text-[#4DFFBE] font-semibold">{displayText}</span>
            <span className="blinking-cursor">|</span> — all in one place.
          </p>

        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      
      </div>

    </div>
    
  );
};

export default HeroSection;
