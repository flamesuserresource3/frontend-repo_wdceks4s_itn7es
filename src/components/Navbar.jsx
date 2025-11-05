import { useEffect, useState } from 'react';
import { FileText, Github, Linkedin } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.2 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] md:w-[80%]">
      <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl px-4 md:px-6 py-3 shadow-lg shadow-cyan-500/5">
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => scrollTo('home')} className="text-cyan-400 font-semibold tracking-wide">
            JR<span className="text-slate-300">.ai</span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  active === s.id
                    ? 'text-cyan-300 bg-cyan-400/10 border border-cyan-400/30'
                    : 'text-slate-300/80 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Aspect022"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/jayesh-rl-748059291"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="inline-flex items-center gap-2 text-xs md:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 md:px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <FileText size={16} /> Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
