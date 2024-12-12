import React from 'react';
import '../assets/AnimatedBackground.css'

interface AnimatedBackgroundProps {
  overlayColor?: string;
  overlayOpacity?: number;
  gridColor?: string;
  animationDuration?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  overlayColor = 'white',
  overlayOpacity = 0.9,
  gridColor = '#f1f1f1',
  animationDuration = 15,
}) => {
  return (
    <div className="animated-background">
      <div 
        className="animated-background__overlay"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
      <div
        className="animated-background__grid"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px),
                            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          animation: `move ${animationDuration}s linear infinite`,
        }}
      />
    </div>
  );
};