import { useState } from "react";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-hero">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-3">
          Stay Updated
        </h2>
        <p className="text-white/70 max-w-lg mx-auto mb-8">
          Subscribe to our newsletter for the latest news on admissions, events, and academic updates.
        </p>

        {subscribed ? (
          <p className="text-secondary font-semibold text-3xl">🎉 Thank you for subscribing! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-4 py-3 text-sm bg-white/10 border border-white/20 text-primary-foreground placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
  type="submit"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold animate-bounce hover:opacity-80 transition-opacity transition-all hover:scale-105"
>
  <Send size={18} /> Subscribe
</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
