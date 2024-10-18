import React from "react";
import HeroSection from "./components/heroSection/heroSection";
import ProblemSection from "./components/problemSection/problemSection";
import { VelocityScroll } from "@/components/layout/scrollVelocity";
import SolutionSection from "./components/solutionSection/solutionSection";
import LatestProjects from "./components/projectSection/projectSection";
import UltimateSection from "./components/ultimateSection/ultimateSection";
import TestimonialSection from "./components/testimonialSection/testimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VelocityScroll text={"Control d'Acces"} className="text-7xl font-bold text-gray-200"/>
      <ProblemSection />
      <SolutionSection />
      <TestimonialSection />
      <LatestProjects />
      <UltimateSection />
    </>
  );
}
