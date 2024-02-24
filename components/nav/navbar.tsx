"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Experience",
      link: "/experience",
    },
  ];
  return (
    <div className={"relative w-full"}>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
