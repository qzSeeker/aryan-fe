"use client";

import { BorderBeam } from "@/Components/magicui/border-beam";
import { useState, useRef, useEffect } from "react";

const PricingSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to the center "Cent" plan
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const pricingData = [
    {
      id: "vintage",
      name: "Vintage",
      description:
        "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      features: {
        initial: "$10%",
        spread: "from 0.2 pips",
        fees: "No Commission",
        leverage: "1:Unlimited",
        lot: "0.01",
        execution: "200 trades during peak hours",
        open: "Unlimited",
        threshold: "0%",
        margin: "30%",
        swap: "0%",
        risk: "Moderate",
      },
    },
    {
      id: "cent",
      name: "Cent",
      highlight: true,
      description:
        "Designed for beginners ready to step into the trading world with minimal risk.",
      features: {
        initial: "$10",
        spread: "from 0.3 pips",
        fees: "Zero Commission",
        leverage: "1:Unlimited",
        lot: "Same",
        execution: "200 trades during peak hours",
        open: "Unlimited",
        threshold: "0%",
        margin: "30%",
        swap: "0%",
        risk: "Low",
      },
    },
    {
      id: "pro",
      name: "Pro",
      description:
        "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      features: {
        initial: "$500",
        spread: "from 0.1 pips",
        fees: "No Commission",
        leverage: "1:Unlimited",
        lot: "Same",
        execution: "200 trades during peak hours",
        open: "Unlimited",
        threshold: "0%",
        margin: "30%",
        swap: "0%",
        risk: "High",
      },
    },
  ];

  const featureRows = [
    { id: "who", name: "Who it's For" },
    { id: "initial", name: "Initial Capital Requirement" },
    { id: "spread", name: "Spread Advantage" },
    { id: "fees", name: "Trading Fees" },
    { id: "leverage", name: "Leverage Capacity" },
    { id: "lot", name: "Minimum Lot Size" },
    { id: "execution", name: "Trade Execution Limit" },
    { id: "open", name: "Open Position Capacity" },
    { id: "threshold", name: "Stop Out Threshold" },
    { id: "margin", name: "Margin Call Activation" },
    { id: "swap", name: "Swap Policy" },
    { id: "risk", name: "Risk Exposure" },
  ];

  // Handle scroll snap on mobile carousel
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;
      
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  const scrollToCard = (index: number): void => {
    if (!carouselRef.current) return;
    
    const cardWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="text-center mb-12 md:mb-28">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-8 bg-black w-max mx-auto px-4 py-2 rounded-2xl border border-[#b2c5ff]">
          <button className="text-xs md:text-sm font-medium bg-black border-neutral-950 bg-gradient-to-r from-[#ffffff] to-[#8b5cf6] bg-clip-text text-transparent">
            Compare Plans
          </button>
        </div>
        <h1 className="text-2xl md:text-5xl font-medium mb-2">
          Compare your <span className="text-purple-500">Zuper</span> plan
        </h1>
        <p className="text-gray-300 md:mt-6 text-sm md:text-base">Flexible Deposits for Every Trader</p>
      </div>

      {/* Mobile Carousel Indicators */}
      <div className="flex justify-center mb-6 md:hidden">
        <div className="flex space-x-2">
          {pricingData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-purple-500 w-6"
                  : "bg-gray-600"
              }`}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div 
        className="md:hidden relative px-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        ref={carouselRef}
      >
        <div className="flex w-full">
          {pricingData.map((plan, index) => (
            <div 
              key={plan.id} 
              className="flex-shrink-0 w-full snap-center px-2"
            >
              <div className="relative group">
                <div className="relative h-full">
                  <div className={`h-full border border-[#ffffff]/20 rounded-xl overflow-hidden ${
                    plan.highlight
                      ? "bg-[#0c040d]"
                      : "bg-gradient-to-b to-[#270829]/5 from-[#270829]"
                  }`}>
                    <div className="px-3 py-6 text-center">
                      <h3 className="text-2xl font-semibold mb-6">Zuper {plan.name}</h3>
                      <p className="text-[12px] text-gray-200 font-medium">
                        {plan.description}
                      </p>
                      <div className="bg-gradient-to-r from-transparent via-white/30 to-transparent w-full mt-2 h-[1px]"/>
                    </div>

                    <div className="space-y-2 px-3">
                      {featureRows.slice(1).map((feature) => (
                        <div
                          key={feature.id}
                          className="flex flex-col justify-between items-center py-2 text-sm"
                        >
                          <span className="text-gray-400 text-xs">{feature.name}</span>
                          <span className="font-medium text-xs">{(plan.features as { [key: string]: string })[feature.id]}</span>
                          <div className="bg-gradient-to-r from-transparent via-white/30 to-transparent w-full mt-4 h-[1px]"/>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col py-8 gap-4 items-center justify-center text-sm text-gray-200 font-medium px-4">
                      <h1>
                        Forex, Crypto, Stocks, <br /> Commodities, Indices
                      </h1>
                      <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#a179fd] shadow-md text-white text-sm font-medium py-2 px-6 rounded-xl">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                {/* BorderBeam for mobile */}
                <div className={`absolute inset-0 rounded-2xl pointer-events-none ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <BorderBeam duration={9} size={300} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="grid grid-cols-4">
          {/* Feature Labels Column */}
          <div className="space-y-2">
            <div className="h-24"></div> {/* Empty space for card headers */}
            {featureRows.map((feature) => (
              <div
                key={feature.id}
                className="text-gray-400 h-12 flex flex-col items-center text-sm px-12"
              >
                {feature.name}
                <div className="bg-gradient-to-r from-transparent via-white/30 to-transparent w-full mt-2 h-[1px]"/>
              </div>
            ))}
          </div>

          {/* Plan Cards */}
          <div className="col-span-3 grid grid-cols-3 gap-[3px] rounded-2xl">
            {pricingData.map((plan, index) => (
              <div key={plan.id} className="relative group">
                <PlanCard
                  plan={plan}
                  featureRows={featureRows}
                  isCenter={index === 1}
                />

                {/* BorderBeam visible only on hover */}
                <div className="absolute inset-0 opacity-0 rounded-2xl group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <BorderBeam duration={9} size={500} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Plan card component for desktop
type PlanCardProps = {
  plan: {
    id: string;
    name: string;
    description: string;
    highlight?: boolean;
    features: { [key: string]: string };
  };
  featureRows: { id: string; name: string }[];
  isCenter: boolean;
};

const PlanCard = ({ plan, featureRows, isCenter }: PlanCardProps) => {
  // Get feature value or description for "Who it's For"

  const getFeatureValue = (featureId: string): string => {
    if (featureId === "who") {
      return plan.description;
    }
    return plan.features[featureId];
  };

  // Card content component to avoid duplication
  const CardContent = () => (
    <div
      className={`h-full border border-[#ffffff]/20 rounded-xl overflow-hidden ${
        isCenter
          ? "bg-[#0c040d]"
          : "bg-gradient-to-b to-[#270829]/5 from-[#270829]"
      }`}
    >
      <div className="px-3 py-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">Zuper {plan.name}</h3>
        <p className="text-[12px] text-gray-200 font-medium">
          {plan.description}
        </p>
        <div className="bg-gradient-to-r from-transparent via-white/30 to-transparent w-full mt-2 h-[1px]"/>
      </div>

      <div className="space-y-2 px-6">
        {featureRows.slice(1).map((feature) => (
          <div
            key={feature.id}
            className="text-center h-12 flex flex-col items-center justify-center text-sm px-4"
          >
            {getFeatureValue(feature.id)}
            <div className="bg-gradient-to-r from-transparent via-white/30 to-transparent w-full mt-4 h-[1px]"/>
          </div>
        ))}
      </div>
      <div className="h-12 flex flex-col py-16 gap-4 items-center justify-center text-sm text-gray-200 font-medium border-b border-gray-700/10 px-4">
        <h1>
          Forex, Crypto, Stocks, <br /> Commodities, Indices
        </h1>
        <button className="bg-gradient-to-r from-[#8b5cf6] to-[#a179fd] shadow-md text-white text-sm font-medium py-2 px-6 rounded-xl">
          Get Started
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative h-full">
      <CardContent />
    </div>
  );
};

export default PricingSection;