"use client";

import { useRef } from "react";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Footer() {
    const sectionRef = useRef<HTMLDivElement>(null!);
    const isIntersecting = useIntersectionObserver({
        ref: sectionRef,
        threshold: 0.2,
    });

return (
    <>
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 overflow-hidden">
        <div ref={sectionRef} className="container mx-auto">
            {/* Text Block */}
            <div
            className={`transition-all duration-1000 transform text-center ${
                isIntersecting
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            >
            <h1 className="text-[4rem] md:text-[7rem] font-medium leading-0.1 md:leading-tight">
                Trade Anytime <span className="text-[#fe58da]"> Anywhere</span>
            </h1>
            </div>
        </div>

        {/* QR Code Block (Overlay) */}
        <div
            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ${
            isIntersecting
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
        >
            <div className="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl border border-white/20">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-[#8b5cf6] blur-3xl opacity-80 rounded-2xl z-[-1]" />

            <div className="w-28 h-28 md:w-56 md:h-56 flex items-center justify-center">
                <Image
                src="/fakeqr.png"
                alt="QR Code"
                width={200}
                height={200}
                className="w-full h-full rounded-xl"
                />
            </div>
            </div>
        </div>

        <div className="z-20 absolute bottom-20">
            <Image
            src="/appplay.png"
            alt="store"
            width={90}
            height={90}
            className="w-full h-full"
            />
        </div>

        </main>
        <div className="flex justify-center flex-col items-center py-24">
            <div className="flex flex-col items-center justify-center mb-8 bg-black w-max mx-auto px-4 py-1.5 rounded-2xl border border-[#b2c5ff]/60">
            <button className="text-xs md:text-sm font-medium bg-black border-neutral-950 bg-gradient-to-r from-[#ffffff] to-[#8b5cf6] bg-clip-text text-transparent">
                FAQs
            </button>
            </div>
            <h1 className="text-3xl md:text-4xl font-medium">
            Have Some <span className="text-[#fe58da]">Questions?</span>
            </h1>
        </div>
        </>
    );
}
