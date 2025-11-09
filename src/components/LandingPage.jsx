import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import DotGrid from './DotGrid';
import TrueFocus from './TrueFocus';
import LightRays from './LightRays';
import TextType from './TextType';

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

      {isTransitioning && (
        <div className='loading-overlay'>
          {/* 3D Rotating blueprint grid */}
          <div className='blueprint-3d-container'>
            <div className='blueprint-grid-3d'>
              {[...Array(10)].map((_, i) => (
                <div key={`h-${i}`} className='grid-line-3d horizontal' style={{ '--index': i }} />
              ))}
              {[...Array(10)].map((_, i) => (
                <div key={`v-${i}`} className='grid-line-3d vertical' style={{ '--index': i }} />
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className='loading-content'>
            <TextType
              text={[exitingSide === 'cad' ? 'CAD SERVICES' : 'ARCHITECTURE']}
              typingSpeed={60}
              pauseDuration={500}
              deletingSpeed={30}
              showCursor={true}
              cursorCharacter='_'
              loop={false}
              className='loading-text-type'
            />
          </div>

          {/* Scanline effect */}
          <div className='scanline'></div>
        </div>
      )}

      <div
        className={`landing-side cad-side ${exitingSide === 'cad' ? 'active' : ''} ${exitingSide === 'architecture' ? 'exit-left' : ''}`}
        onClick={() => handleNavigation('/cad-services', 'cad')}>
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
