import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [exitingSide, setExitingSide] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path, side) => {
    setExitingSide(side);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  return (
    <div className='landing-container'>
      {/* Loading overlay with drawing animation */}
      {isTransitioning && (
        <div className='loading-overlay'>
          <div className='loading-content'>
            <svg className='loading-svg' viewBox='0 0 800 200'>
              <text x='50%' y='50%' textAnchor='middle' dominantBaseline='middle' className='loading-text'>
                {exitingSide === 'cad' ? 'CAD Services' : 'Architecture'}
              </text>
            </svg>
            <div className='drawing-line'></div>
            <div className='blueprint-grid'>
              <div className='grid-line horizontal line-1'></div>
              <div className='grid-line horizontal line-2'></div>
              <div className='grid-line vertical line-3'></div>
              <div className='grid-line vertical line-4'></div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`landing-side cad-side ${exitingSide === 'cad' ? 'active' : ''} ${exitingSide === 'architecture' ? 'exit-left' : ''}`}
        onClick={() => handleNavigation('/cad-services', 'cad')}>
        <div className='background-image cad-bg'></div>
        <div className='overlay cad-overlay'></div>
        <div className='corner-lines'>
          <div className='corner-line top-left'></div>
          <div className='corner-line bottom-right'></div>
        </div>
        <h1 className='side-title'>
          <span className='title-letter'>C</span>
          <span className='title-letter'>A</span>
          <span className='title-letter'>D</span>
          <span className='title-space'> </span>
          <span className='title-letter'>S</span>
          <span className='title-letter'>e</span>
          <span className='title-letter'>r</span>
          <span className='title-letter'>v</span>
          <span className='title-letter'>i</span>
          <span className='title-letter'>c</span>
          <span className='title-letter'>e</span>
          <span className='title-letter'>s</span>
        </h1>
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
        <h1 className='side-title'>
          <span className='title-letter'>A</span>
          <span className='title-letter'>r</span>
          <span className='title-letter'>c</span>
          <span className='title-letter'>h</span>
          <span className='title-letter'>i</span>
          <span className='title-letter'>t</span>
          <span className='title-letter'>e</span>
          <span className='title-letter'>c</span>
          <span className='title-letter'>t</span>
          <span className='title-letter'>u</span>
          <span className='title-letter'>r</span>
          <span className='title-letter'>e</span>
        </h1>
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
