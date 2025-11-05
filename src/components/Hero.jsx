import { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, FolderGit2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fullText = "Hey, I’m Jayesh RL — AI Developer, Full Stack Engineer, and Researcher.";

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [cursor, setCursor] = useState(true);
  const idxRef = useRef(0);

  useEffect(() => {
    const typer = setInterval(() => {
      if (idxRef.current < fullText.length) {
        setDisplayText((t) => t + fullText[idxRef.current]);
        idxRef.current += 1;
      } else {
        clearInterval(typer);
      }
    }, 35);

    const blink = setInterval(() => setCursor((c) => !c), 500);

    return () => {
      clearInterval(typer);
      clearInterval(blink);
    };
  }, []);

  const ctas = useMemo(
    () => [
      { label: 'Projects', href: '#projects', Icon: FolderGit2 },
      { label: 'GitHub', href: 'https://github.com/Aspect022', Icon: Github },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/jayesh-rl-748059291', Icon: Linkedin },
      { label: 'Chat With Me', href: '#contact', Icon: MessageCircle },
    ],
    []
  );

  return (
    <section id="home" className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient veil so text stands out */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 md:px-8 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-100 tracking-tight"
        >
          {displayText}
          <span className={`ml-1 inline-block w-1 bg-cyan-400 ${cursor ? 'opacity-80' : 'opacity-0'}`}>&nbsp;</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-slate-300/90 max-w-3xl mx-auto"
        >
          Crafting intelligent systems, designing resilient backends, and building immersive interfaces. Exploring deep learning, LLMs, and spiking neural networks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {ctas.map(({ label, href, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={`group inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm transition-transform hover:-translate-y-0.5 ${
                i === 0
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Icon size={18} className="text-cyan-300" />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
