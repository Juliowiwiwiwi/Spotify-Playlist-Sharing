import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="ehehe">EHEHE</h1>
      <div className="title-group">
        <h2 className="julios-music">Julio's Music</h2>
        <h3 className="capsule">Capsule</h3>
      </div>
      <p className="description">
        All my favourite playlists<br />
        at once place cuz ily <span className="heart">❤️</span>
      </p>
      <button 
        className="pop-button"
        onClick={() => navigate('/playlists')}
      >
        open
      </button>
    </div>
  );
};

export default Home;