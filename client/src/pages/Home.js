import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ user, socket }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate('/queue', { state: { category } });
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>⚔️ Mog Wars</h1>
        <p>Face Off. Compete. Dominate.</p>
      </div>

      {user ? (
        <div className="user-info">
          <h2>Welcome back, {user.username}!</h2>
          <div className="user-stats">
            <div className="stat">
              <span className="stat-label">Rank</span>
              <span className="stat-value">{user.rank}</span>
            </div>
            <div className="stat">
              <span className="stat-label">MMR</span>
              <span className="stat-value">{user.mmr}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Wins</span>
              <span className="stat-value">{user.wins}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Win Rate</span>
              <span className="stat-value">
                {user.wins + user.losses > 0 
                  ? ((user.wins / (user.wins + user.losses)) * 100).toFixed(1) + '%'
                  : 'N/A'
                }
              </span>
            </div>
          </div>

          <div className="category-select">
            <button 
              className="category-btn boys-btn"
              onClick={() => handleCategorySelect('boys')}
            >
              👨 Play as Boys
            </button>
            <button 
              className="category-btn girls-btn"
              onClick={() => handleCategorySelect('girls')}
            >
              👩 Play as Girls
            </button>
          </div>

          <button className="profile-btn" onClick={() => navigate('/profile')}
          >
            View Full Profile
          </button>
        </div>
      ) : (
        <div className="login-prompt">
          <p>Sign in to start competing!</p>
          <button className="login-btn" onClick={() => navigate('/login')}>
            Login / Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;