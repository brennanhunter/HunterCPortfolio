'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MousePointer, Eye, Clock, Lightbulb } from 'lucide-react';

const card =
  'rounded-xl border-4 border-deep-navy p-6 shadow-[8px_8px_0_#111827] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111827]';

const principles = [
  { icon: MousePointer, tag: 'Constraint Design', title: 'One-Button Rule', desc: 'A self-imposed limit that forced creative solutions and amplified every decision.', hover: 'hover:bg-aqua-spark' },
  { icon: Eye, tag: 'Environmental Teaching', title: 'Teaching Without Words', desc: 'Like Mario — the game teaches through interaction, not instruction.', hover: 'hover:bg-xtremery-purple hover:text-off-white' },
  { icon: Clock, tag: 'Temporal Mechanics', title: 'Timing as Decision', desc: 'Under one button, when you act matters as much as what you do.', hover: 'hover:bg-xtremery-blue hover:text-off-white' },
  { icon: Lightbulb, tag: 'Emergent Design', title: 'Limitation Breeds Creativity', desc: 'Anti-gravity and ice-sliding mechanics emerged from the constraint.', hover: 'hover:bg-aqua-spark' },
];

const mechanics = [
  'Moveable platforms — one click, complex spatial reasoning',
  'Anti-gravity zones for verticality and flow',
  'Ice sliding — momentum-based timing puzzles',
  'Logic + timing fusion: knowing what AND when to act',
];

export default function InnovationShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px -100px 0px' });
  return (
    <section ref={ref} className="bg-off-white px-6 py-20 text-deep-navy">
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-md border-4 border-deep-navy bg-xtremery-blue px-4 py-1.5 text-sm font-black uppercase tracking-widest text-off-white shadow-[5px_5px_0_#111827]">
          Innovation
        </span>
        <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
          <span className="inline-block border-4 border-deep-navy bg-aqua-spark px-2 shadow-[6px_6px_0_#111827]">Shadow</span> Mind
        </h2>
        <p className="mt-6 max-w-3xl text-lg font-medium md:text-xl">
          A self-imposed challenge: build a compelling game using only <strong>one button</strong>. The result —
          mechanics that emerged from pure creative constraint.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-xl border-4 border-deep-navy shadow-[10px_10px_0_#111827]"
        >
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/M6s9ebqlRi8?rel=0&modestbranding=1"
              title="Shadow Mind"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`bg-off-white ${card} ${p.hover}`}
              >
                <Icon className="h-9 w-9" strokeWidth={2.5} />
                <span className="mt-3 inline-block rounded border-2 border-deep-navy px-2 py-0.5 text-xs font-black uppercase">{p.tag}</span>
                <h3 className="mt-3 text-lg font-black">{p.title}</h3>
                <p className="mt-1 text-sm font-medium">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {mechanics.map((m) => (
            <div key={m} className="rounded-lg border-4 border-deep-navy bg-off-white px-5 py-4 font-bold shadow-[5px_5px_0_#111827]">
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
