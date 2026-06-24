import { SEOHead } from '../components/ui/SEOHead';
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";

const AboutUs = () => {
  // About page route combines the reusable about and services sections
  return (
    <>
      <SEOHead
        title="About RV Studio"
        description="Learn about RV Studio - a premium photography studio based in Rajkot, Gujarat. Established in 2018, we specialize in wedding, portrait, commercial, and event photography with over 6 years of professional experience."
        keywords="about RV Studio, photography studio Rajkot, professional photographer, photography experience, wedding photographer biography, photography services"
        image="https://res.cloudinary.com/rvstudioin/image/upload/v1/Portrait/gwciolewgyz820b6eirf"
        url="/about"
        type="AboutPage"
      />
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default AboutUs;
