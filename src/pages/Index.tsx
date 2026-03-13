import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FacultySection from "@/components/FacultySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <FacultySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
