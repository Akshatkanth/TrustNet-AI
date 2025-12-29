// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleBack = () => {
    if (onBack) onBack();
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Signup', { email, password, name });
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <button onClick={handleBack} className="back-btn">
          ← Back
        </button>
        {/* Center aligned content */}
        <div className="header-content">
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p>{isLogin ? 'Login to your TrustNet AI account' : 'Join TrustNet AI today'}</p>
        </div>
      </header>
      
      <main className="login-main">
        <div className="login-container">
          <div className="form-tabs">
            <button 
              className={`tab-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`tab-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="form-footer">
            <p>
              {isLogin 
                ? "Don't have an account?" 
                : "Already have an account?"
              }
              <button type="button" className="toggle-link" onClick={toggleForm}>
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-buttons">
            <button className="social-btn google">
              <span>Google</span>
            </button>
            <button className="social-btn github">
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
