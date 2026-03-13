import { Clock, Instagram, Linkedin, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="font-display font-bold text-lg mb-3">Pinnacle Institute</p>
          <p className="text-sm text-white/70">Empowering minds since 1999. NAAC A++ accredited institution committed to academic excellence and holistic development.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
            <li><Link to="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Programs</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/courses" className="hover:text-white transition-colors">Undergraduate</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Postgraduate</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Diploma</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Certifications</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>admissions@pinnacleinstitute.edu</li>
            <li>+91 80 1234 5678</li>
            <li>123 University Avenue, Knowledge City</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-white/50">
      <div className="flex gap-5 mt-5">
            <Linkedin size={25} className="hover:text-white transition-colors cursor-pointer"/>
            <TwitterIcon size={25} className="hover:text-white transition-colors cursor-pointer"/>
            <Instagram size={25} className="hover:text-white transition-colors cursor-pointer"/>
      </div>
     
        © {new Date().getFullYear()} Pinnacle Institute. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
