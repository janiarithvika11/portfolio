"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import EducationAchievements from "@/components/sections/EducationAchievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="relative min-h-screen text-foreground bg-background selection:bg-purple-600/30 selection:text-white transition-opacity duration-500 opacity-100">
          {/* Custom lagging Cursor follow glow */}
          <CustomCursor />

          {/* Interactive particles background layer */}
          <ParticleBackground />

          {/* Glassmorphic responsive navigation header */}
          <Navbar />

          <main className="relative">
            {/* 1. Hero Landing Block */}
            <Hero />

            {/* 2. Professional Introduction Block */}
            <About />

            {/* 3. Categorised Grid Skills Block */}
            <Skills />

            {/* 4. Professional Work History timeline */}
            <Experience />

            {/* 5. Projects filterable catalogue */}
            <Projects />

            {/* 6. Education context and Achievements metrics */}
            <EducationAchievements />

            {/* 7. Working contact console */}
            <Contact />
          </main>

          {/* Footer & Back to top button */}
          <Footer />
        </div>
      )}
    </>
  );
}
