import React from "react";
import BlurText from "./BlurText";
import Counter from "./Counter";

const HeroSection: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-[#0a0a18] text-white overflow-hidden">
        <div className="flex flex-col items-center justify-center mb-8 bg-black w-max mx-auto px-4 py-1.5 rounded-2xl border border-[#b2c5ff]/60">
            <button className="text-xs md:text-sm font-medium bg-black border-neutral-950 bg-gradient-to-r from-[#ffffff] to-[#8b5cf6] bg-clip-text text-transparent">
            Our Process
            </button>
        </div>

        <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            <BlurText text="We've Paid Out Over" delay={100} />
            </h1>

            <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
            <BlurText text="$1M to Traders" delay={300} />
            </h1>

            <p className="text-gray-400 text-md max-w-2xl mx-auto">
            Your Trust is Our Fuel—Power Up with Zuperior
            </p>
        </div>

        {/* Counter with continuously incrementing value */}
        <div className="mt-12 mb-8">
            <Counter
            className="text-6xl md:text-7xl lg:text-[12rem] font-medium text-gray-300"
            startValue={999156}
            interval={3000}
            />
        </div>
        </div>
    );
};

export default HeroSection;
