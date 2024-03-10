"use client";

import Navbar from "@/components/navbar";
import { WavyBackground } from "@/components/wavy-background";

export default function Home() {
  return (
    <div className="relative">
      <div>
        <Navbar />
        <WavyBackground className="max-w-4xl mx-auto pb-40">

          <p className="text-2xl md:text-8xl lg:text-8xl text-white font-bold inter-var text-center">
            Andrew Tamayo
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Computer Science Student @ University of Tennessee - Knoxville
          </p>
        </WavyBackground>
      </div>
    </div>
  );
}
