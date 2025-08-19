import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Lottery from './components/Lottery';
import Reviews from './components/Reviews';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Story darkMode={darkMode} />
      <Lottery darkMode={darkMode} />
      <Reviews darkMode={darkMode} />
      <Order darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;