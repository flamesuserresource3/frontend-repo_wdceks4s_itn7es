import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ThreatPeek',
    desc: 'AI Threat Scanner',
    stack: ['TypeScript', 'Next.js', 'Express'],
    demo: '#',
    code: 'https://github.com/Aspect022',
  },
  {
    title: 'HealthPredict',
    desc: 'Multi-Disease Prediction',
    stack: ['FastAPI', 'React', 'ML'],
    demo: '#',
    code: 'https://github.com/Aspect022',
  },
  {
    title: 'Humans Care Foundation Website',
    desc: 'SEO optimized non-profit site',
    stack: ['Next.js', 'Firebase'],
    demo: '#',
    code: 'https://github.com/Aspect022',
  },
  { title: 'Java Spring Job Portal', desc: 'Full-stack job portal', stack: ['Spring Boot', 'MySQL'], demo: '#', code: 'https://github.com/Aspect022' },
  { title: 'Lecture Notes Generator', desc: 'NLP powered notes', stack: ['Python', 'NLP'], demo: '#', code: 'https://github.com/Aspect022' },
  { title: 'Static Orrery Simulation', desc: 'Solar system viz', stack: ['Three.js'], demo: '#', code: 'https://github.com/Aspect022' },
  { title: 'AI Loan Approval Predictor', desc: 'ML classification', stack: ['Python', 'ML'], demo: '#', code: 'https://github.com/Aspect022' },
  { title: 'Python Text RPG Adventure', desc: 'CLI RPG', stack: ['Python'], demo: '#', code: 'https://github.com/Aspect022' },
  { title: 'Platformer Game', desc: '2D platformer', stack: ['Java'], demo: '#', code: 'https://github.com/Aspect022' },
  { title: 'House Price Prediction', desc: 'EDA + ML', stack: ['Python', 'Pandas'], demo: '#', code: 'https://github.com/Aspect022' },
];

const timeline = [
  {
    org: 'WhyDigit Pvt. Ltd',
    role: 'Backend Developer Intern',
    time: 'Internship',
    bullets: ['Built robust APIs', 'Improved reliability', 'Worked with databases'],
  },
  {
    org: 'Humans Care Foundation',
    role: 'Python & ML Intern',
    time: 'Internship',
    bullets: ['Deployed ML models', 'Data pipelines', 'Automation scripts'],
  },
  {
    org: 'Humans Care Foundation',
    role: 'Lead Software Developer',
    time: 'Leadership',
    bullets: ['Led development', 'SEO and performance', 'Team mentorship'],
  },
];

const research = [
  { title: 'Spiking-Transformer Hybrid for ECG Spike Detection', summary: 'Combining SNNs with attention for event detection.' },
  { title: 'Lightweight Quantized EEGNet', summary: 'Efficient EEG model for edge devices.' },
  { title: 'Personalized Cardio Equation for ECG Modeling', summary: 'Parametric signal modeling; patent in progress.' },
];

export default function Portfolio() {
  return (
    <div className="relative">
      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
            >
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15" />
              <div className="mt-3">
                <h3 className="text-slate-100 font-medium">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-1 rounded-md text-[11px] bg-white/5 text-cyan-200 border border-cyan-400/20">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-cyan-300 hover:underline"><ExternalLink size={14}/> Demo</a>
                  <a href={p.code} className="inline-flex items-center gap-1 text-slate-300 hover:underline"><Github size={14}/> Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          Experience
        </motion.h2>
        <div className="mt-6 relative">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-purple-500/50" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.org + i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.5 }}
                className="relative pl-10"
              >
                <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px] shadow-cyan-500/40" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-slate-100 font-medium">{t.role} · {t.org}</h3>
                    <span className="text-slate-400 text-xs">{t.time}</span>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-slate-300/90 text-sm space-y-1">
                    {t.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          Research
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {research.map((r) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <h4 className="text-slate-100 font-medium">{r.title}</h4>
              <p className="text-slate-400 text-sm mt-1">{r.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
