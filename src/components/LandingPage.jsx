import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import DotGrid from './DotGrid';
import TrueFocus from './TrueFocus';
import LightRays from './LightRays';

const LandingPage = () => {
  const [exitingSide, setExitingSide] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredSide, setHoveredSide] = useState(null); // Track which side is hovered
  const [hasInteracted, setHasInteracted] = useState(false); // Track if user has interacted
  const navigate = useNavigate();

  const handleNavigation = (path, side) => {
    setExitingSide(side);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  const handleSideHover = (side) => {
    setHasInteracted(true);
    setHoveredSide(side);
  };

  const handleSideLeave = () => {
    setHoveredSide(null);
  };

  return (
    <div className='landing-container'>
      {/* Single DotGrid Background for entire page */}
      <div className='global-background'>
        <DotGrid
          dotSize={6}
          gap={30}
          baseColor='#ffffff'
          activeColor='#ffffff'
          proximity={150}
          shockRadius={200}
          shockStrength={4}
          resistance={800}
          returnDuration={1.5}
        />
      </div>

      {/* Centered Light Rays Effect for entire page */}
      <div className='global-light-rays'>
        <LightRays
          raysOrigin='top-center'
          raysColor='#ffffff'
          raysSpeed={2.5}
          lightSpread={0.3}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.8}
          noiseAmount={0.02}
          distortion={0.01}
          fadeDistance={2}
          saturation={2}
        />
      </div>

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
        <div className='overlay cad-overlay'></div>
        <div className='corner-lines'>
          <div className='corner-line top-left'></div>
          <div className='corner-line bottom-right'></div>
        </div>
        <div className='side-title' onMouseEnter={() => handleSideHover('cad')} onMouseLeave={handleSideLeave}>
          <TrueFocus
            sentence='CAD Services'
            manualMode={true}
            blurAmount={5}
            borderColor='#ffffff'
            animationDuration={0.5}
            isFocused={!hasInteracted || hoveredSide === 'cad'}
          />
        </div>
      </div>

      <div
        className={`landing-side architecture-side ${exitingSide === 'architecture' ? 'active' : ''} ${exitingSide === 'cad' ? 'exit-right' : ''}`}
        onClick={() => handleNavigation('/architecture', 'architecture')}>
        <div className='overlay architecture-overlay'></div>
        <div className='corner-lines'>
          <div className='corner-line top-left'></div>
          <div className='corner-line bottom-right'></div>
        </div>
        <div className='side-title' onMouseEnter={() => handleSideHover('architecture')} onMouseLeave={handleSideLeave}>
          <TrueFocus
            sentence='Architecture'
            manualMode={true}
            blurAmount={5}
            borderColor='#ffffff'
            animationDuration={0.5}
            isFocused={!hasInteracted || hoveredSide === 'architecture'}
          />
        </div>
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
