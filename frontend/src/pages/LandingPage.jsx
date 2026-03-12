import Navbar from "../LandingPageComponents/Navbar";
import Hero from "../LandingPageComponents/Hero";
import Features from "../LandingPageComponents/Features";
import HowItWorks from "../LandingPageComponents/HowItWorks";
import Testimonials from "../LandingPageComponents/Testimonials";
import CTA from "../LandingPageComponents/CTA";
import Footer from "../LandingPageComponents/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;