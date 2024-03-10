"use client";

import Navbar from "@/components/navbar";
import { WavyBackground } from "@/components/wavy-bg";

export default function Home() {
  return (
    <div className="relative">
      <div>
        <Navbar />
        <WavyBackground className="max-w-4xl max-h-96 mx-auto pb-40">

          <p className="text-2xl md:text-8xl lg:text-8xl text-white font-bold inter-var text-left">
            Work Experience
          </p>
        </WavyBackground>
      </div>
    </div>
  );
}
