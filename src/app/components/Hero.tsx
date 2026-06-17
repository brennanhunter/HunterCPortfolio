'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Gamepad2, Rocket, Code, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Gamepad2, title: 'Multi-Engine', desc: 'UE5 & Blueprints · O3DE · Godot · Defold', hover: 'hover:bg-aqua-spark' },
  { icon: Rocket, title: 'Shipped to Production', desc: 'JusTrack on iOS & Android · BoxStreamTV live', hover: 'hover:bg-xtremery-purple hover:text-white' },
  { icon: Code, title: 'Full-Stack', desc: 'TypeScript · Next.js · AWS IVS · Stripe · Supabase', hover: 'hover:bg-xtremery-blue hover:text-white' },
];

const roles = ['Technical Game Designer', 'Multi-Engine Generalist', 'Full-Stack Developer'];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F4EDD8] px-6 py-20 text-deep-navy">
      <div className="mx-auto w-full max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-md border-4 border-deep-navy bg-deep-navy px-4 py-1.5 text-sm font-black uppercase tracking-widest text-[#F4EDD8] shadow-[5px_5px_0_#7C3AED]"
        >
          Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl"
        >
          Hunter
          <br />
          <span className="mt-2 inline-block border-4 border-deep-navy bg-aqua-spark px-3 shadow-[8px_8px_0_#111827]">
            Coleman
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          {roles.map((r) => (
            <span
              key={r}
              className="rounded-lg border-[3px] border-deep-navy bg-white px-4 py-2 text-sm font-bold shadow-[4px_4px_0_#111827] sm:text-base"
            >
              {r}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-3xl text-xl font-medium leading-relaxed md:text-2xl"
        >
          I prototype fast across engines and ship products end to end — from{' '}
          <mark className="bg-xtremery-purple px-1 font-bold text-white">UE5 gameplay systems</mark> to a{' '}
          <mark className="bg-xtremery-blue px-1 font-bold text-white">live streaming platform</mark> serving real audiences.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`rounded-xl border-4 border-deep-navy bg-white p-6 shadow-[8px_8px_0_#111827] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111827] ${s.hover}`}
              >
                <Icon className="h-10 w-10" strokeWidth={2.5} />
                <h3 className="mt-4 text-2xl font-black">{s.title}</h3>
                <p className="mt-1 font-medium">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <motion.a
            href="mailto:huntercolemandesign@gmail.com"
            whileTap={{ x: 4, y: 4, boxShadow: '2px 2px 0 #111827' }}
            className="inline-flex items-center gap-2 rounded-lg border-4 border-deep-navy bg-xtremery-purple px-6 py-3 text-lg font-black text-white shadow-[6px_6px_0_#111827] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0_#111827]"
          >
            <Mail className="h-5 w-5" /> Let&apos;s Connect <ArrowRight className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/huntercgaming/"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ x: 4, y: 4, boxShadow: '2px 2px 0 #111827' }}
            className="inline-flex items-center gap-2 rounded-lg border-4 border-deep-navy bg-white px-6 py-3 text-lg font-black shadow-[6px_6px_0_#111827] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:bg-aqua-spark hover:shadow-[9px_9px_0_#111827]"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
