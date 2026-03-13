import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default ContactPage;
