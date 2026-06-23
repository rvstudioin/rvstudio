import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";

const AboutUs = () => {
  // About page route combines the reusable about and services sections
  return (
    <>
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default AboutUs;
