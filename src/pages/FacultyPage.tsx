import Navbar from "@/components/Navbar";
import FacultySection from "@/components/FacultySection";
import Footer from "@/components/Footer";

const FacultyPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <FacultySection />
    </div>
    <Footer />
  </div>
);

export default FacultyPage;
