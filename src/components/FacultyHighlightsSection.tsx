import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { faculty } from "@/data/faculty";

const highlights = faculty.slice(0, 4);

const FacultyHighlightsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-secondary">Learn From The Best</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">Faculty Highlights</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {highlights.map((f) => (
          <div key={f.id} className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all">
            <div className="h-44 overflow-hidden bg-muted">
              <img src={f.photo} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-display font-bold text-foreground">{f.name}</h3>
              <p className="text-sm text-secondary font-semibold">{f.designation}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Briefcase size={12} /> {f.experience} years experience
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/faculty"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Meet All Faculty <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default FacultyHighlightsSection;
