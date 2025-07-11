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
        <div className='form-container'>
          <form className="hero-search-form">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" placeholder="Where to?" />
          </div>

          <div className="form-group">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" id="checkin" name="checkin" />
          </div>

          <div className="form-group">
            <label htmlFor="checkout">Check-out</label>
            <input type="date" id="checkout" name="checkout" />
          </div>

          <button type="submit" className="search-btn">Search</button>
        </form>

        </div>
        

      </div>
      
      
    </div>
  );
};

export default HeroSection;
