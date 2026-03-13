import { Link } from "react-router-dom";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { courses } from "@/data/courses";

const featured = courses.slice(0, 6);

const FeaturedCoursesSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-secondary">Popular Programs</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">Featured Courses</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Discover our most sought-after programs designed to launch your career.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {featured.map((c) => (
          <article key={c.id} className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow flex flex-col">
            <h3 className="font-display font-bold text-foreground text-lg mb-2">{c.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{c.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock size={14} /> {c.duration}</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} /> {c.eligibility}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity ransition-all hover:scale-105"
        >
          View All Programs <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedCoursesSection;
