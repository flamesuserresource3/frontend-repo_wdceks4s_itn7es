import { motion } from 'framer-motion';
import { Brain, Cpu, Layers, Atom, Mail, AtSign } from 'lucide-react';

const glow = 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20';

const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'SQL', 'C'],
  'Frameworks & Tools': ['React', 'Next.js', 'FastAPI', 'Spring Boot', 'TensorFlow', 'Firestore', 'MySQL', 'MongoDB'],
  Concepts: ['Deep Learning', 'LLMs', 'Attention', 'Quantization', 'SNNs', 'Signal Processing (EEG/ECG)'],
  Tools: ['IntelliJ', 'VSCode', 'PyCharm', 'Jupyter', 'Git'],
};

const aboutHighlights = ['Deep Learning', 'LLMs', 'Spiking Neural Networks', 'Scalable Backends'];

export default function Sections() {
  return (
    <div className="relative">
      {/* ABOUT */}
      <section id="about" className="relative max-w-6xl mx-auto px-6 md:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-6 rounded-2xl border border-white/10 ${glow} p-6 md:p-8 backdrop-blur`}
        >
          <p className="text-slate-300 leading-relaxed">
            I’m Jayesh RL, an AI-focused developer pursuing B.Tech in Computer Science (AI & ML) at Dayananda Sagar University with a GPA of 9.45/10. I build intelligent systems, explore neural architectures, and design scalable backend systems.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {aboutHighlights.map((k) => (
              <span key={k} className="px-3 py-1 rounded-full text-xs bg-white/5 text-cyan-200 border border-cyan-400/30 shadow-inner shadow-cyan-500/10">
                {k}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Holographic profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-4 p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:shadow-xl hover:shadow-cyan-500/10 transition-shadow"
        >
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-cyan-400/20 via-blue-400/20 to-purple-400/20" />
          </div>
          <div>
            <p className="text-slate-200 font-medium">Jayesh RL</p>
            <p className="text-slate-400 text-sm">AI Developer • Full Stack Engineer • Researcher</p>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-8 pb-10">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl font-semibold text-white"
        >
          Skills
        </motion.h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([cat, items]) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <h4 className="text-slate-100 font-medium mb-3">{cat}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full text-xs bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-200 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS + CONTACT */}
      <section id="contact" className="relative max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl border border-white/10 ${glow} p-6 backdrop-blur`}
          >
            <h3 className="text-slate-100 text-xl font-semibold">Achievements & Leadership</h3>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-3xl font-semibold text-cyan-300">9.45</p>
                <p className="text-slate-400 text-sm mt-1">GPA</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-3xl font-semibold text-cyan-300">Top 15</p>
                <p className="text-slate-400 text-sm mt-1">Hackathon</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-3xl font-semibold text-cyan-300">DSUX</p>
                <p className="text-slate-400 text-sm mt-1">Tempête Lead</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-slate-100 text-xl font-semibold">Let’s build something</h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <label className="block">
                <span className="text-slate-300 text-sm">Your Name</span>
                <input className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400/50" placeholder="Ada Lovelace" />
              </label>
              <label className="block">
                <span className="text-slate-300 text-sm">Email</span>
                <input type="email" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400/50" placeholder="you@example.com" />
              </label>
              <label className="block">
                <span className="text-slate-300 text-sm">Message</span>
                <textarea rows={4} className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400/50" placeholder="Tell me about your idea..." />
              </label>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 shadow-lg shadow-cyan-500/20">
                <Mail size={16} /> Send
              </button>
              <p className="text-xs text-slate-400 mt-1">Or reach me directly: <a className="text-cyan-300 hover:underline" href="mailto:jayeshrl2005@gmail.com">jayeshrl2005@gmail.com</a></p>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
