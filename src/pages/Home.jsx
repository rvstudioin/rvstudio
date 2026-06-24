// src/pages/Home.jsx
import { SEOHead }       from '../components/ui/SEOHead';
import { HeroSlider }    from '../components/sections/HeroSlider';
import { RecentWorks }   from '../components/sections/RecentWorks';
import { VideosSection } from '../components/sections/VideosSection';
// import { PortfolioGrid } from '../components/sections/PortfolioGrid';
import { AboutSection }  from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ContactSection } from '../components/sections/ContactSection';
import videos from '../data/videos.json';
 
export default function Home() {
  // Home page composes several landing sections and sets SEO metadata
  return (
    <>
      <SEOHead
        title="Photography Studio"
        description="RV Studio — Premium photography studio in Rajkot, Gujarat. Specialising in weddings, portraits, commercial, events & nature photography."
        keywords="photography studio Rajkot, wedding photographer Gujarat, portrait photography, commercial photography India"
        url="/"
      />
      <HeroSlider />
      <RecentWorks />
      <AboutSection />
      <ServicesSection />
      <VideosSection
        videos={videos.slice(0, 3)}
        title="Studio Films & Stories"
        subtitle="Featured RV Studio videos from our latest photography projects and Rajkot stories."
        showViewAll
        viewAllLink="/videos"
      />
      <ContactSection />
    </>
  );
}