"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShimmerButton } from "@/Components/magicui/shimmer-button";
import { ArrowUpRight } from 'lucide-react';

const FundingSection = () => {
  return (
    <section className="py-20 text-center relative">
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="flex flex-col items-center justify-center mb-8 bg-black w-max mx-auto px-4 py-1 rounded-2xl border border-[#b2c5ff]">
          <button className="text-xs md:text-sm font-medium bg-black border-neutral-950 bg-gradient-to-r from-[#ffffff]/50 to-[#8b5cf6] bg-clip-text text-transparent">
            Prop Firm
          </button>
        </div>
      <div className="relative z-10">
        <motion.h2 
          className="text-5xl font-medium mb-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          Get Funded Up to <span className="text-purple-500">$10,000</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Prove your skills, get funded, and trade like a pro.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <ShimmerButton className="shadow-2xl bg-purple-600 gap-1">
            <span className="whitespace-pre-wrap rounded-2xl text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Get Funded
            </span>
            <ArrowUpRight className="w-5 h-5" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default FundingSection;