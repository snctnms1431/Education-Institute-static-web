import { useState } from "react";
import { Briefcase, Award, GraduationCap, X, Mail, BookOpen } from "lucide-react";
import { faculty, FacultyMember } from "@/data/faculty";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const FacultySection = () => {
  const [selected, setSelected] = useState<FacultyMember | null>(null);

  return (
    <section id="faculty" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary">Our Experts</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">Meet the Faculty</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Learn from distinguished academics with decades of research and industry experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {faculty.map((f) => (
            <article
              key={f.id}
              onClick={() => setSelected(f)}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={f.photo}
                  alt={`Photo of ${f.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground text-lg">{f.name}</h3>
                <p className="text-sm font-semibold text-secondary mt-0.5">{f.designation}</p>
                <p className="text-xs text-muted-foreground mt-2">{f.qualifications}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase size={13} /> {f.experience} yrs exp.</span>
                  <span className="flex items-center gap-1"><Award size={13} /> {f.specialization.split("&")[0].trim()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Faculty Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-border">
          <DialogTitle className="sr-only">{selected?.name ?? "Faculty Detail"}</DialogTitle>
          {selected && (
            <div>
              <div className="relative h-56 bg-muted">
                <img
                  src={selected.photo.replace("w=300&h=300", "w=600&h=400")}
                  alt={`Photo of ${selected.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <h3 className="font-display font-bold text-2xl">{selected.name}</h3>
                  <p className="text-sm opacity-90">{selected.designation}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 bg-muted/60 rounded-lg p-3">
                    <GraduationCap size={18} className="text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Qualifications</p>
                      <p className="text-sm text-foreground mt-0.5">{selected.qualifications}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-muted/60 rounded-lg p-3">
                    <Briefcase size={18} className="text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Experience</p>
                      <p className="text-sm text-foreground mt-0.5">{selected.experience} Years</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-muted/60 rounded-lg p-3">
                  <BookOpen size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Specialization</p>
                    <p className="text-sm text-foreground mt-0.5">{selected.specialization}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-muted/60 rounded-lg p-3">
                  <Mail size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Contact</p>
                    <p className="text-sm text-foreground mt-0.5">
                      {selected.name.toLowerCase().replace(/dr\.\s|prof\.\s/g, "").replace(/\s+/g, ".")}@pinnacle.edu.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FacultySection;
