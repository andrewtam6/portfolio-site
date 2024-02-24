"use client"
import { WavyBackground } from "@/components/ui/wavy-background";
import { FloatingNavDemo } from "@/components/nav/navbar"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <>
      <FloatingNavDemo />
      <WavyBackground>
        <p className="text-white text-8xl text-center font-bold p-4">Andrew Tamayo</p>
        <p className="text-gray-300 text-s text-center font-bold ">Computer Science Student @ University of Tennessee &mdash; Knoxville</p>
        <div className="w-full h-20 flex  justify-center items-center mt-2">
          <button onClick={handleClick} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-16 py-3  bg-black rounded-[6px]  relative group transition duration-200 text-white font-medium hover:bg-transparent">
              Contact Me
            </div>
          </button>

        </div>
      </WavyBackground>
    </>
  );
}
