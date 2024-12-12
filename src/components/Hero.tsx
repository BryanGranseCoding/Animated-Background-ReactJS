import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <AnimatedBackground overlayColor="#f0f0f0" />  {/*optional props (see documentation in ReadMe.md): gridColor="#1E293B" overlayColor="#f0f0f0"*/}
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Our Website</h1>
        <p className="text-xl text-black">Discover amazing things with us</p>
      </div>
    </section>
  );
};