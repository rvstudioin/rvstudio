import { SEOHead } from "../components/ui/SEOHead";
import { ContactSection } from "../components/sections/ContactSection";

const Contact = () => {
  // Contact page route forwards to the contact section component
  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with RV Studio for wedding photography, portrait sessions, commercial shoots, events and more. Located in Rajkot, Gujarat. Contact us today!"
        keywords="contact photography studio, book photographer, photography inquiry, wedding photography booking, commercial photography, RV Studio contact"
        image="https://res.cloudinary.com/rvstudioin/image/upload/v1/og-image.jpg"
        url="/contact"
        type="ContactPage"
      />
      <ContactSection />
    </>
  );
}

export default Contact;
