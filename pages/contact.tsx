"use client"
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavDemo } from "@/components/nav/navbar"

export default function contact() {
  // TODO: FIX STYLING
  return (
    <>
      <FloatingNavDemo />
      <WavyBackground>
        <p className="text-white text-8xl text-center font-bold p-4">Andrew Tamayo</p>
        <p className="text-gray-300 text-s text-center font-bold ">Computer Science Student @ University of Tennessee &mdash; Knoxville</p>
        <div className="w-full h-20 flex  justify-center items-center mt-2">


        </div>
      </WavyBackground>
    </>
  );
}

