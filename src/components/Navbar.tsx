import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Faculty", to: "/faculty" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-hero flex items-center justify-center ">
            <img src="/logo.png" alt="Institute logo" />
          </div>
          <span className=" font-poppins font-bold text-2xl text-foreground"><span className="text-3xl">P</span>innacle <span className="text-3xl">I</span>nstitute</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === l.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover border-2 border-primary" />
                <span className="text-sm font-medium text-foreground max-w-[100px] truncate">{user.name}</span>
                <ChevronDown size={14} className={`text-muted-foreground transition-transform ${profileOpen ? "rotate-180" : ""}`} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-card border border-border rounded-xl shadow-card-hover py-2 z-50">
                  <div className="px-4 py-3 border-b border-border">
                    <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={() => { setProfileOpen(false); }}
                    className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <User size={15} /> View Profile
                  </button>
                  <button
                    onClick={() => { logout(); setProfileOpen(false); }}
                    className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-destructive hover:bg-muted transition-colors"
                  >
                    <LogOut size={15} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90  animate-bounce transition-all hover:scale-105"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className="block py-2 text-foreground font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
            {user ? (
              <>
                <li className="flex items-center gap-3 py-2 border-t border-border mt-2 pt-4">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => { logout(); setOpen(false); }}
                    className="block w-full text-left py-2 text-destructive font-medium"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (

<li>
  <Link
    to="/auth"
    onClick={() => setOpen(false)}
    className="block text-center py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold animate-pulse transition-all hover:scale-105"
  >
    Sign In
  </Link>
</li>
   
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
