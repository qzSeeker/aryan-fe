'use client'

import React, { useEffect, useRef } from 'react';
import { TimelineDemo } from './TimelineD';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentTitle = titleRef.current;

    if (currentTitle) {
      observer.observe(currentTitle);
    }

    return () => {
      if (currentTitle) {
        observer.unobserve(currentTitle);
      }
    };
  }, []);

  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 w-full flex items-center justify-center">
<div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[220px] rounded-b-full bg-gradient-to-t from-[#a855f7] to-transparent blur-[100px] opacity-80" />
          <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-full h-[400px] rounded-full bg-gradient-to-t from-[#8015e4] via-[#ffffff] to-[#8015e4] blur-[200px] opacity-90" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center mb-8 bg-black w-max mx-auto px-4 py-1.5 rounded-2xl border border-[#b2c5ff]/60">
        <button className="text-xs md:text-sm font-medium bg-black border-neutral-950 bg-gradient-to-r from-[#ffffff] to-[#8b5cf6] bg-clip-text text-transparent">Our Process</button>
        </div>
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-normal mb-4 opacity-0 transition-opacity duration-1000 ease-out"
        >
          Become a <span className="bg-clip-text text-transparent bg-[#fe58da]">Zuperior Pro</span> in sec...
        </h1>
        
        <p className="text-[#d7e7ff] text-sm md:text-base max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-300">
          🚀 Sign up. Fund. Trade.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in animation-delay-500">
          <TimelineDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;