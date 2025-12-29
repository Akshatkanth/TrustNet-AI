// src/pages/Landing.jsx
import React, { useState } from 'react';
import { Shield, Baby, GraduationCap, Briefcase, User, HelpCircle, LogIn } from 'lucide-react';
import './Landing.css';

const Landing = ({ onStart, onLogin, onHowItWorks, onAbout }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin();
    }
  };

  const handleHowItWorksClick = (e) => {
    e.preventDefault();
    if (onHowItWorks) {
      onHowItWorks();
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (onAbout) {
      onAbout();
    }
  };

  return (
    <div className="landing-root">
      <header className="landing-top-header">
        <div className="header-logo">
          <Shield className="header-icon" size={28} />
          <span className="header-title">TrustNet AI</span>
        </div>
        
        <nav className="header-nav">
          <div className="nav-left">
            <a href="#about" className="nav-link" onClick={handleAboutClick}>
              <HelpCircle size={18} />
              <span>About</span>
            </a>
            <a 
              href="#how-it-works" 
              className="nav-link"
              onClick={handleHowItWorksClick}
            >
              How it works
            </a>
          </div>
          
          <button 
            className="login-btn" 
            onClick={handleLoginClick}
            style={{border: 'none', background: 'none', cursor: 'pointer'}}
          >
            <LogIn size={18} />
            <span>Login</span>
          </button>
        </nav>
      </header>

      <div className="landing-gradient" />

      <header className="landing-header">
        <h1 className="landing-title">TrustNet AI</h1>
        <p className="landing-subtitle">Your Personal Internet Safety Guardian</p>
      </header>

      <main className="landing-main">
        <p className="landing-description">
          Verify messages, images, links, and profiles instantly. Get AI-powered
          analysis to protect yourself from scams, fake news, deepfakes, and
          online threats.
        </p>

        <button className="landing-cta" onClick={onStart}>
          <span>Start Analyzing Now</span>
          <span className="landing-cta-arrow">➜</span>
        </button>

        <div className="landing-badges">
          <div className="landing-badge">
            <Baby className="landing-emoji" size={20} />
            <span>Protects Kids</span>
          </div>
          <div className="landing-badge">
            <GraduationCap className="landing-emoji" size={20} />
            <span>Protects Students</span>
          </div>
          <div className="landing-badge">
            <Briefcase className="landing-emoji" size={20} />
            <span>Protects Adults</span>
          </div>
          <div className="landing-badge">
            <User className="landing-emoji" size={20} />
            <span>Protects Seniors</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
