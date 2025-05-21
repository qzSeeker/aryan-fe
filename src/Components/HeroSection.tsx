import React, { useEffect, useRef } from "react";
import BlurText from "./BlurText";
import Counter from "./Counter";
import gsap from "gsap";

const HeroSection: React.FC = () => {
    const waveGroup = useRef(null);

    useEffect(() => {
        // Animate the wave group sliding left continuously
        gsap.to(waveGroup.current, {
        xPercent: -33.33,  // slide one wave width left
        duration: 12,
        ease: "linear",
        repeat: -1,
        });
    }, []);
return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-[#0a0a18] text-white overflow-hidden">
        <div className="flex flex-col items-center justify-center mb-8 bg-black w-max mx-auto px-4 py-1.5 rounded-2xl border border-[#b2c5ff]/60">
            <button className="text-xs md:text-sm font-medium bg-black border-neutral-950 bg-gradient-to-r from-[#ffffff] to-[#8b5cf6] bg-clip-text text-transparent">
            Our Process
            </button>
        </div>

        <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-medium leading-tight">
            <BlurText text="We've Paid Out Over" delay={100} />
            </h1>

            <h1 className="text-3xl md:text-5xl font-medium mb-4 leading-tight">
            <BlurText text="$1M to Traders" delay={300} />
            </h1>

            <p className="text-gray-400 text-sm md:text-md max-w-2xl mx-auto">
            Your Trust is Our Fuel—Power Up with Zuperior
            </p>
        </div>

        {/* Counter with continuously incrementing value */}
        <div className="mt-12 md:mb-8">
            <Counter
            className="text-5xl md:text-7xl lg:text-[12rem] font-medium text-gray-300"
            startValue={999156}
            interval={3000}
            />
        </div>

        <div className="w-full py-20">
            {/* Glowing Animated SVG */}
      <svg
      className="absolute bottom-0 w-full h-auto"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g ref={waveGroup} style={{ transformOrigin: "0 0" }}>
        {/* 3 identical waves side-by-side */}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            fill="url(#glowGradient)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,170.7C960,160,1056,96,1152,106.7C1248,117,1344,203,1392,245.3L1440,288V320H0Z"
            transform={`translate(${1440 * i}, 0)`}
          />
        ))}
      </g>
    </svg>
            {/* Foreground Button */}
            <button className="z-20 relative top-20 px-6 py-3 text-white font-semibold bg-black border border-gray-700 rounded-full hover:bg-[#8b5cf6] transition-all duration-300">
            Are you Next? →
            </button>
        </div>
    </div>
    );
};

export default HeroSection;
