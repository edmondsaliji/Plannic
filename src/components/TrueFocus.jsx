import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './TrueFocus.css';

const TrueFocus = ({
  sentence = 'True Focus',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  isFocused: externalFocused = true // Accept external focus state
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const textRect = textRef.current.getBoundingClientRect();

    setFocusRect({
      x: textRect.left - parentRect.left,
      y: textRect.top - parentRect.top,
      width: textRect.width,
      height: textRect.height
    });
  }, [externalFocused, sentence]);

  return (
    <div className='focus-container' ref={containerRef}>
      <span
        ref={textRef}
        className={`focus-word ${manualMode ? 'manual' : ''} ${externalFocused ? 'active' : ''}`}
        style={{
          filter: externalFocused ? `blur(0px)` : `blur(${blurAmount}px)`,
          '--border-color': borderColor,
          '--glow-color': glowColor,
          transition: `filter ${animationDuration}s ease`
        }}>
        {sentence}
      </span>

      <motion.div
        className='focus-frame'
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: externalFocused ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={{
          '--border-color': borderColor,
          '--glow-color': glowColor
        }}>
        <span className='corner top-left'></span>
        <span className='corner top-right'></span>
        <span className='corner bottom-left'></span>
        <span className='corner bottom-right'></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
