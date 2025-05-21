import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { categories } from "@/data/resourceData";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ResourcesHeaderProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const ResourcesHeader: React.FC<ResourcesHeaderProps> = ({
    activeCategory,
    setActiveCategory,
}) => {
    const headerRef = useRef<HTMLDivElement>(null!);
    const isIntersecting = useIntersectionObserver({
        ref: headerRef,
        threshold: 0.2,
    });

    return (
        <div
        ref={headerRef}
        className="mb-8 max-w-5xl mx-auto px-4 md:px-0 flex flex-col items-start"
        >
        <div
            className={`transform transition-all duration-1000 ${
            isIntersecting
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
        >
            <div className="flex flex-col items-center justify-center mb-8 bg-black w-max px-4 py-1.5 rounded-2xl border border-[#b2c5ff]/60">
            <button className="text-xs md:text-sm font-medium bg-black border-neutral-950 bg-gradient-to-r from-[#ffffff] to-[#8b5cf6] bg-clip-text text-transparent">
                Resources
            </button>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-2">
            Learn while <span className="text-[#fe58da]">Trading</span>
            </h2>
            <p className="text-gray-400 mb-8">
            Learn & Trade - Master Markets Like a Pro
            </p>
        </div>

        <div className="relative w-full flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between">
            <div
            className={`flex space-x-6 border-b border-gray-800 transition-all duration-1000 transform delay-300 ${
                isIntersecting
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            >
            {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`pb-2 px-1 text-xs md:text-sm font-medium transition-colors relative ${
                    activeCategory === category.id
                    ? "text-[#8b5cf6]"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                >
                {category.name}
                {activeCategory === category.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fe58da]"></span>
                )}
                </button>
            ))}
            </div>
            <div className="hidden md:flex space-x-4">
                <button
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                    aria-label="Previous"
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                    aria-label="Next"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
        </div>
    );
};

export default ResourcesHeader;
