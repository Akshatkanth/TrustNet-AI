import React from "react";
import "./About.css";

const About = ({ onClose }) => {
  const handleBackClick = () => {
    if (onClose) {
      onClose(); // Calls handleBackToLanding from App.jsx
    }
  };

  return (
    <div className="about-page">
      {/* Back Button */}
      <button className="back-button" onClick={handleBackClick}>
        ← Back
      </button>

      {/* Hero Header */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About TrustNet AI</h1>
          <p>Your Personal Internet Safety Guardian</p>
        </div>
      </div>

      {/* Rest of your component remains exactly the same */}
      {/* Main Content Container */}
      <div className="about-main">
        {/* Info Cards Row */}
        <div className="info-cards">
          <div className="info-card problem-card">
            <div className="card-icon">🚨</div>
            <h3>The Problem</h3>
            <p>Internet full of scams, fake websites, fraud messages across all age groups</p>
          </div>

          <div className="info-card solution-card">
            <div className="card-icon">🧠</div>
            <h3>Our Solution</h3>
            <p>AI-powered analysis detecting scams, deepfakes & risky behavior instantly</p>
          </div>

          <div className="info-card impact-card">
            <div className="card-icon">🌍</div>
            <h3>Social Impact</h3>
            <p>Protects kids, students, adults & seniors while promoting digital literacy</p>
          </div>

          <div className="info-card team-card">
            <div className="card-icon">👨‍💻</div>
            <h3>Our Team</h3>
            <p>4 CSE students collaborating on research, AI development & testing</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Aryan Singh</h3>
              <p><strong>Branch:</strong> CSE</p>
              <p><strong>Roll No:</strong> 21UCS001</p>
              <p><strong>Year:</strong> 3rd Year</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Student Name 2</h3>
              <p><strong>Branch:</strong> CSE</p>
              <p><strong>Roll No:</strong> 21UCS002</p>
              <p><strong>Year:</strong> 3rd Year</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">🧠</div>
              <h3>Student Name 3</h3>
              <p><strong>Branch:</strong> CSE</p>
              <p><strong>Roll No:</strong> 21UCS003</p>
              <p><strong>Year:</strong> 3rd Year</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">📱</div>
              <h3>Student Name 4</h3>
              <p><strong>Branch:</strong> CSE</p>
              <p><strong>Roll No:</strong> 21UCS004</p>
              <p><strong>Year:</strong> 3rd Year</p>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="detailed-content">
          {/* Problem Statement */}
          <div className="content-section">
            <h2>🚨 The Problem Statement</h2>
            <div className="problem-grid">
              <div className="problem-item">
                <h4>👶 Kids</h4>
                <p>Online predators, fake game rewards</p>
              </div>
              <div className="problem-item">
                <h4>🎓 Students</h4>
                <p>Fake jobs, fake internships</p>
              </div>
              <div className="problem-item">
                <h4>👨 Adults</h4>
                <p>UPI scams, fake websites, deepfake videos</p>
              </div>
              <div className="problem-item">
                <h4>👴 Seniors</h4>
                <p>OTP fraud, lottery scams</p>
              </div>
            </div>
            <p className="problem-highlight">
              No single system exists where users can upload messages, images, links or chats and simply ask "Is this safe?" People lose money, privacy, and lives daily.
            </p>
          </div>

          {/* Solution Details */}
          <div className="content-section">
            <h2>🛡️ Proposed Solution</h2>
            <p>
              TrustNet AI is a web app + browser extension that acts as your personal internet safety assistant. Users can upload screenshots, paste messages/links, or ask simple questions like:
            </p>
            <div className="solution-examples">
              <div className="example-card">"Is this person safe?"</div>
              <div className="example-card">"Is this job genuine?"</div>
              <div className="example-card">"Is this message real?"</div>
            </div>
            <p>AI responds with Risk Score, proof reasons, next steps & safe alternatives.</p>
          </div>

          {/* Workflow */}
          <div className="content-section">
            <h2>⚙️ How It Works</h2>
            <div className="workflow-steps">
              <div className="step">
                <div className="step-number">1</div>
                <p>User uploads content (chat, image, link)</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <p>Microsoft Azure AI services analyze for scams, deepfakes, predators</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <p>ML model calculates Risk Score (0-100%)</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <p>Azure OpenAI explains in simple language</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <p>Safety suggestions provided</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="content-section">
            <h2>🛠️ Technology Stack</h2>
            <div className="tech-stack-grid">
              <div className="tech-item">
                <span>Frontend</span>
                <strong>React</strong>
              </div>
              <div className="tech-item">
                <span>Backend</span>
                <strong>Flask/FastAPI</strong>
              </div>
              <div className="tech-item">
                <span>AI Services</span>
                <strong>Azure AI Vision, Language, OpenAI</strong>
              </div>
              <div className="tech-item">
                <span>Database</span>
                <strong>Cosmos DB</strong>
              </div>
              <div className="tech-item">
                <span>ML Model</span>
                <strong>Scikit-learn</strong>
              </div>
              <div className="tech-item">
                <span>Extension</span>
                <strong>Chrome Extension</strong>
              </div>
            </div>
          </div>

          {/* Microsoft AI Services Table */}
          <div className="content-section">
            <h2>🔵 Microsoft AI Services Used</h2>
            <table className="ai-services-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Azure AI Language</td>
                  <td>Analyze messages & chats</td>
                </tr>
                <tr>
                  <td>Azure AI Vision</td>
                  <td>Detect fake/edited images</td>
                </tr>
                <tr>
                  <td>Azure ML</td>
                  <td>Risk prediction models</td>
                </tr>
                <tr>
                  <td>Azure OpenAI</td>
                  <td>Human-like explanations</td>
                </tr>
                <tr>
                  <td>Cosmos DB</td>
                  <td>Scam threat database</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Business Model */}
          <div className="content-section">
            <h2>💰 Business Model (Future)</h2>
            <div className="business-grid">
              <div className="business-card">
                <h4>Freemium</h4>
                <p>Free basic checks, Premium full protection</p>
              </div>
              <div className="business-card">
                <h4>B2B</h4>
                <p>Banks, schools, companies</p>
              </div>
              <div className="business-card">
                <h4>API</h4>
                <p>Sell API to other apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="about-footer">
        <p>Built with ❤️ as a college project to create a safer digital future</p>
        <p>© 2025 TrustNet AI Team | All rights reserved</p>
      </footer>
    </div>
  );
};

export default About;
