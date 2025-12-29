// src/App.jsx
import React, { useState } from 'react';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import About from './pages/About.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'home', 'login', 'howitworks', 'about'

  const handleStart = () => {
    setCurrentPage('home');
  };

  const handleLogin = () => {
    setCurrentPage('login');
  };

  const handleHowItWorks = () => {
    setCurrentPage('howitworks');
  };

  const handleAbout = () => {
    setCurrentPage('about');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return <Landing onStart={handleStart} onLogin={handleLogin} onHowItWorks={handleHowItWorks} onAbout={handleAbout} />;
  }

  if (currentPage === 'login') {
    return <LoginPage onBack={handleBackToLanding} />;
  }

  if (currentPage === 'howitworks') {
    return <HowItWorks onClose={handleBackToLanding} />;
  }

  if (currentPage === 'about') {
    return <About onClose={handleBackToLanding} />;
  }

  return <Home onLogin={handleLogin} onBack={handleBackToLanding} />;
};

export default App;
