'use client'
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Plans from '@/Components/Plans';
import TradingSection from '@/Components/TradingSection';
import Wavy from '@/Components/Wavy';

import React from 'react'

const page = () => {
  return (
    <div className="relative overflow-hidden bg-[#050814] text-white min-h-screen">
          <Hero />
          <Plans />
          <TradingSection/>
          <Wavy/>
          <Footer/>
      </div>
  );
}

export default page
