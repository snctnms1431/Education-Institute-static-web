import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", text: "To cultivate intellectual curiosity and equip students with skills that drive innovation, foster leadership, and create positive societal impact." },
  { icon: Eye, title: "Our Vision", text: "To be a globally recognized institution of higher learning that transforms lives through excellence in education, research, and community engagement." },
  { icon: Heart, title: "Our Values", text: "Integrity, inclusivity, academic rigor, continuous innovation, and a deep commitment to the holistic development of every learner." },
];

const AboutSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase text-secondary">Who We Are</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">About Pinnacle Institute</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Founded in 1999, Pinnacle Institute has grown into one of India's most respected educational institutions, offering over 50 programs across disciplines with a commitment to academic excellence.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {values.map((v) => (
          <div key={v.title} className="text-center bg-card rounded-xl border border-border p-8 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
              <v.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="font-display font-bold text-foreground text-xl mb-3">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
