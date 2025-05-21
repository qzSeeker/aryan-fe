/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/moving-border";

interface TimelineEntry {
  step: number;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full bg-dark dark:bg-neutral-950 px-4 md:px-8">
      <div className="relative max-w-6xl mx-auto">
        {data.map((item, index) => {
          const ref = useRef<HTMLDivElement>(null);
          const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start center", "end center"],
          });

          const lineHeight = useTransform(scrollYProgress, [0, 1], [0, 200]); // 150px height per segment

          return (
            <div key={index} ref={ref} className="relative mb-48">
              {/* Step Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative w-12 h-12 rounded-full bg-dark dark:bg-neutral-950 border-2 border-gray-700 flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    style={{
                      scale: useTransform(scrollYProgress, [0, 1], [0, 1]),
                      opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
                    }}
                  />
                  <span className="text-white text-xl font-bold">
                    {String(item.step).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Static Grey Line */}
              <div className="absolute left-1/2 top-[60px] w-[2px] h-[200px] -translate-x-1/2 bg-gray-700 opacity-30 z-0" />

              {/* Animated White Fill Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-1/2 top-[60px] w-[2px] -translate-x-1/2 bg-white z-10 origin-top"
              />

              {/* Step Content */}
              <div
                className={`mt-20 p-6 md:p-10 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:ml-[55%] md:text-left ml-[50%]"
                    : "md:mr-[55%] md:text-right mr-[50%]"
                }`}
              >
                <div className="text-white">{item.content}</div>
              </div>
            </div>
          );
        })}

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center mt-20">
          <Button
            borderRadius="1rem"
            className="bg-[#8011ff] hover:from-purple-700 hover:to-purple-800 border-purple-500/50 px-5 py-3 text-white font-semibold transition-all duration-300"
          >
            <span className="flex items-center gap-2 font-medium">
              Open FREE Account
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
