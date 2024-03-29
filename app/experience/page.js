"use client";

import Navbar from "@/components/navbar";
import { WavyBackground } from "@/components/wavy-bg";

export default function Contact() {
  // Add work information
  return (
    <div className="flex justify-start mx-24">
      <div>
        <Navbar />
        <WavyBackground className="mx-auto">
          <p className="text-2xl md:text-3xl lg:text-6xl text-white font-bold inter-var text-left z-30">
            Experience
          </p>
        </WavyBackground>
      </div>
    </div>
  );
}
