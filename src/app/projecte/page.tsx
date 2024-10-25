import React from 'react';
import StepsSection from './components/stepSection/stepSection';
import ProductSection from './components/productSection/productSection';
import AboutSection from './components/aboutSection/aboutSection';
import UltimateSection from '../(home)/components/ultimateSection/ultimateSection';
import { VelocityScroll } from '@/components/layout/scrollVelocity';
import ProjectsSection from './components/projectSection/projectSection';

const ProjectePage = () => {
  return (
    <>
      <AboutSection />
      <VelocityScroll text={"Control d'Acces"} className="text-7xl font-bold text-gray-200"/>
      <StepsSection />
      <ProjectsSection />
      <ProductSection />
      <UltimateSection />
    </>
  );
};

export default ProjectePage;