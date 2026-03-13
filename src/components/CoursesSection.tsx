import { useState } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { courses, categoryLabels, type CourseCategory } from "@/data/courses";

const categories: ("All" | CourseCategory)[] = ["All", "UG", "PG", "Diploma", "Certification"];

const categoryColors: Record<CourseCategory, string> = {
  UG: "bg-blue-100 text-blue-800",
  PG: "bg-emerald-100 text-emerald-800",
  Diploma: "bg-amber-100 text-amber-800",
  Certification: "bg-purple-100 text-purple-800",
};

const CoursesSection = () => {
  const [filter, setFilter] = useState<"All" | CourseCategory>("All");

  const filtered = filter === "All" ? courses : courses.filter((c) => c.category === filter);

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary">Academic Programs</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">Courses Offered</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Choose from 22+ programs across undergraduate, postgraduate, diploma and certification tracks.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat === "All" ? "All Programs" : categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((course) => (
            <article
              key={course.id}
              className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              <span className={`animate-pulse self-start text-xs font-bold px-3 py-1 rounded-full mb-3 ${categoryColors[course.category]}`}>
                {categoryLabels[course.category]}
              </span>
              <h3 className="font-display font-bold text-foreground text-lg mb-2 leading-snug">{course.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-3">
                <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                <span className="flex items-center gap-1"><CheckCircle size={14} /> {course.eligibility}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
