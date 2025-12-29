// src/pages/HowItWorks.jsx
import React from 'react';
import { 
  UploadCloud, 
  Brain, 
  ShieldCheck, 
  Zap, 
  ArrowLeft 
} from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = ({ onClose }) => {
  const steps = [
    {
      icon: UploadCloud,
      title: "Upload Content",
      description: "Share images, links, or text you want to verify",
      position: "left"
    },
    {
      icon: Brain,
      title: "AI Analysis", 
      description: "Our AI detects deepfakes, scams & fake content automatically",
      position: "right"
    },
    {
      icon: ShieldCheck,
      title: "Get Risk Score",
      description: "Receive detailed analysis with proof & explanations instantly",
      position: "left"
    },
    {
      icon: Zap,
      title: "Stay Protected",
      description: "Apply safety measures with one click protection",
      position: "right"
    }
  ];

  return (
    <div className="howitworks-page">
      {/* Background Pattern */}
      <div className="bg-pattern"></div>
      
      {/* Header */}
      <header className="page-header">
        <div className="header-top">
          <button className="back-btn" onClick={onClose}>
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
        <div className="header-main">
          <h1 className="main-title">How it Works</h1>
          <p className="main-subtitle">Simple protection in just 4 steps</p>
        </div>
      </header>

      {/* Steps Grid */}
      <div className="steps-grid">
        <div className="step-row">
          <div className="step-card left">
            <div className="step-number">1</div>
            <UploadCloud className="step-icon" size={44} />
            <h3>Upload Content</h3>
            <p>Share images, links, or text you want to verify</p>
          </div>
          <div className="step-card right">
            <div className="step-number">2</div>
            <Brain className="step-icon" size={44} />
            <h3>AI Analysis</h3>
            <p>Our AI detects deepfakes, scams & fake content automatically</p>
          </div>
        </div>
        
        <div className="step-row">
          <div className="step-card left">
            <div className="step-number">3</div>
            <ShieldCheck className="step-icon" size={44} />
            <h3>Get Risk Score</h3>
            <p>Receive detailed analysis with proof & explanations instantly</p>
          </div>
          <div className="step-card right">
            <div className="step-number">4</div>
            <Zap className="step-icon" size={44} />
            <h3>Stay Protected</h3>
            <p>Apply safety measures with one click protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
