import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white">
      {/* Subtle animated background grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Sections />
        <Portfolio />
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Jayesh RL — Built with care.
      </footer>
    </div>
  );
}
