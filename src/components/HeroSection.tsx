import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "15,000+", label: "Alumni Worldwide" },
  { icon: BookOpen, value: "50+", label: "Programs Offered" },
  { icon: Users, value: "120+", label: "Expert Faculty" },
  { icon: Award, value: "25+", label: "Years of Excellence" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5" />

      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-white/70 mb-4 animate-fade-up">
            Established 1999 · NAAC A++ Accredited
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-display font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Shape Your Future at{" "}
            <span className="text-gradient-gold">Pinnacle Institute</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Empowering learners with world-class education, cutting-edge research, and industry-ready skills since 1999. Join a legacy of excellence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/courses" className="animate-pulse  inline-flex items-center px-7 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-bold text-base hover:opacity-90 transition-all hover:scale-105">
              Explore Programs
            </Link>
            <Link to="/contact" className="inline-flex items-center px-7 py-3.5 rounded-lg border-2 border-white/30 text-primary-foreground font-bold text-base hover:bg-white/10 transition-colors transition-all hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>  
          <div className="flex justify-around ">
            <img src="/cap.png" alt="Graduation Cap" className="w-[450px]" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-7 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all hover:scale-105">
              <s.icon className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-xl font-bold text-primary-foreground">{s.value}</p>
                <p className="text-xs text-white/70">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
