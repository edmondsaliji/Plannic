import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [exitingSide, setExitingSide] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (path, side) => {
    setExitingSide(side);
    setTimeout(() => {
      navigate(path);
    }, 800);
  };

  return (
    <div className='landing-container'>
      <div
        className={`landing-side cad-side ${exitingSide === 'cad' ? 'active' : ''} ${exitingSide === 'architecture' ? 'exit-left' : ''}`}
        onClick={() => handleNavigation('/cad-services', 'cad')}>
        <div className='background-image cad-bg'></div>
        <div className='overlay cad-overlay'></div>
        <div className='corner-lines'>
          <div className='corner-line top-left'></div>
          <div className='corner-line bottom-right'></div>
        </div>
        <h1 className='side-title'>CAD Services</h1>
      </div>

      <div
        className={`landing-side architecture-side ${exitingSide === 'architecture' ? 'active' : ''} ${exitingSide === 'cad' ? 'exit-right' : ''}`}
        onClick={() => handleNavigation('/architecture', 'architecture')}>
        <div className='background-image architecture-bg'></div>
        <div className='overlay architecture-overlay'></div>
        <div className='corner-lines'>
          <div className='corner-line top-left'></div>
          <div className='corner-line bottom-right'></div>
        </div>
        <h1 className='side-title'>Architecture</h1>
      </div>

      <div className='animated-lines'>
        <div className='diagonal-line line-1'></div>
        <div className='diagonal-line line-2'></div>
        <div className='diagonal-line line-3'></div>
      </div>
    </div>
  );
};

export default LandingPage;
