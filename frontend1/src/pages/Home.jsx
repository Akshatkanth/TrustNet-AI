// src/pages/Home.jsx - Complete Code with Perfect Layout
import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import ResultCard from '../components/ResultCard';
import Loader from '../components/Loader';
import { analyzeText } from '../services/api';
import './Home.css';

const Home = ({ onBack }) => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!text.trim() && files.length === 0) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await analyzeText(text, files, { detailed: true });
      setResult(response);
    } catch (err) {
      setError(err.message || 'Failed to analyze content. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setText('');
    setFiles([]);
    setResult(null);
    setError(null);
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="home-container">
      {/* HEADER SECTION */}
      <header className="header">
        {/* BACK BUTTON - LEFTMOST */}
        <div className="back-section">
          <button 
            className="back-button" 
            onClick={handleBack} 
            aria-label="Go back to landing page"
          >
            ← Back
          </button>
        </div>

        {/* TITLE & TAGLINE - CENTER */}
        <div className="header-content">
          <h1 className="title">TrustNet-AI</h1>
          <p className="subtitle">AI-Powered Content Trust & Risk Analysis</p>
        </div>

        {/* SPACER - RIGHT SIDE */}
        <div className="header-spacer"></div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <TextInput
          value={text}
          onChange={setText}
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
          onFilesChange={setFiles}
        />

        {isLoading && <Loader message="Analyzing content with AI..." />}

        {error && (
          <div className="error-message">
            <div className="error-content">
              <h3>⚠️ Analysis Error</h3>
              <p>{error}</p>
              <button onClick={handleReset} className="retry-button">
                Try Again
              </button>
            </div>
          </div>
        )}

        {result && !isLoading && <ResultCard result={result} />}

        {result && (
          <div className="action-buttons">
            <button onClick={handleReset} className="reset-button">
              Analyze New Content
            </button>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>Made for Imagine Cup 2025 | Powered by AI</p>
      </footer>
    </div>
  );
};

export default Home;
