'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Map, Users } from 'lucide-react';

const card =
  'rounded-xl border-4 border-deep-navy p-6 shadow-[8px_8px_0_#111827] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111827]';

const achievements = [
  { icon: Brain, tag: 'Behavior Trees', title: 'AI Enemy Coordination', desc: 'Enemies work together — alternating attacks and reacting to the player.', hover: 'hover:bg-aqua-spark' },
  { icon: Map, tag: 'Level Design', title: 'Environmental Pacing', desc: 'Levels teach their mechanics naturally — no tutorials, just flow.', hover: 'hover:bg-xtremery-purple hover:text-off-white' },
  { icon: Users, tag: 'Leadership', title: 'Led a Team of 7', desc: 'Owned direction and kept seven developers shipping together.', hover: 'hover:bg-xtremery-blue hover:text-off-white' },
];

const philosophy = [
  'Dual-purpose design — every ability serves both puzzle and combat.',
  'Combat as puzzle — pick the right ability at the right time.',
  'Teach, then test — every level is a lesson.',
  'Players should feel clever, not guided.',
];

export default function FeaturedProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -100px 0px' });
  return (
    <section ref={ref} className="bg-off-white px-6 py-20 text-deep-navy">
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-md border-4 border-deep-navy bg-xtremery-purple px-4 py-1.5 text-sm font-black uppercase tracking-widest text-off-white shadow-[5px_5px_0_#111827]">
          Featured Project
        </span>
        <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
          <span className="inline-block border-4 border-deep-navy bg-aqua-spark px-2 shadow-[6px_6px_0_#111827]">Dawn</span> and Dusk
        </h2>
        <p className="mt-6 max-w-3xl text-lg font-medium md:text-xl">
          A puzzle-platformer where every mechanic serves dual purposes — my UE5 capstone, built with a team of 7.
          AI coordination, environmental teaching, and systems design.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-xl border-4 border-deep-navy shadow-[10px_10px_0_#111827]"
        >
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/r3SEvl1vqFs?rel=0&modestbranding=1"
              title="Dawn and Dusk Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`bg-off-white ${card} ${a.hover}`}
              >
                <Icon className="h-9 w-9" strokeWidth={2.5} />
                <span className="mt-3 inline-block rounded border-2 border-deep-navy px-2 py-0.5 text-xs font-black uppercase">{a.tag}</span>
                <h3 className="mt-3 text-xl font-black">{a.title}</h3>
                <p className="mt-1 font-medium">{a.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {philosophy.map((p) => (
            <div key={p} className="rounded-lg border-4 border-deep-navy bg-off-white px-5 py-4 font-bold shadow-[5px_5px_0_#111827]">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
