import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import FacultyHighlightsSection from "@/components/FacultyHighlightsSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Home = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedCoursesSection />
      <FacultyHighlightsSection />
      <ContactSection />
      <NewsletterSection />
    </main>
    <Footer />
  </div>
);

export default Home;
