import React from "react";
import HeroSection from "./components/heroSection/heroSection";
import CarrouselSection from "./components/carrouselSection/carrouselSection";
import { VelocityScroll } from "@/components/layout/scrollVelocity";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VelocityScroll text={"Control d'Access"} className="text-7xl font-bold text-red-100" /*text-gray-200*//>
      <CarrouselSection />
    </>
  );
}
