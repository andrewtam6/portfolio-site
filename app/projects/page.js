"use client";
import Navbar from "@/components/navbar";
import { WavyBackground } from "@/components/wavy-bg";
import ProjectsGrid from "@/components/projects";

export default function Projects() {
  // Add a projects grid
  return (
    <div className="flex">
      <div>
        <Navbar />
        <WavyBackground>
          <p className="text-2xl md:text-3xl lg:text-6xl text-white font-bold inter-var text-left mb-16">
            Projects
          </p>
        </WavyBackground>
        <ProjectsGrid />
      </div>
    </div>
  );
}
