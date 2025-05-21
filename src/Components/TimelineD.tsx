import React from "react";
import { Timeline } from "@/Components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      step: 1,
      title: "01",
      content: (
        <div>
            <h2 className="text-neutral-500 font-medium text-xs md:text-sm dark:text-neutral-200">Step 1</h2>
            <p className="text-sm md:text-lg font-medium">
              Register Your Account    
            </p>
        </div>
      ),
    },
    {
      step: 2,
      title: "02",
      content: (
        <div>
            <h2 className="text-neutral-500 font-medium text-xs md:text-sm dark:text-neutral-200">Step 2</h2>
            <p className="text-sm md:text-lg font-medium ">
              Deposit Your Funds    
            </p>
        </div>
        
      ),
    },
    {
      step: 3,
      title: "03",
      content: (
       <div>
            <h2 className="text-neutral-500 font-medium text-xs md:text-sm dark:text-neutral-200">Step 3</h2>
            <p className="text-sm md:text-lg font-medium">
              KYC  
            </p>
        </div>
      ),
    },
    {
      step: 4,
      title: "04",
      content: (
       <div>
            <h2 className="text-neutral-500 font-medium text-xs md:text-sm dark:text-neutral-200">Step 4</h2>
            <p className="text-sm md:text-lg font-medium">
              Start Trading & Earn Profits 
            </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
