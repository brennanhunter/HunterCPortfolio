'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gamepad2, Code, Compass } from 'lucide-react';

const cats = [
  { icon: Gamepad2, title: 'Game & Engines', accent: 'bg-aqua-spark', text: 'text-deep-navy', skills: ['Unreal Engine 5 + Blueprints', 'C++ (Gameplay)', 'O3DE · Godot · Defold', '3C Fundamentals', 'Systems & Tools Design'] },
  { icon: Code, title: 'Engineering', accent: 'bg-xtremery-purple', text: 'text-off-white', skills: ['TypeScript / Next.js / React', 'Python', 'Real-Time Media (AWS IVS)', 'Supabase · Stripe · S3', 'Git & Release Pipelines'] },
  { icon: Compass, title: 'Working Style', accent: 'bg-xtremery-blue', text: 'text-off-white', skills: ['Autonomous ownership', 'Strong written communication', 'Cross-discipline (T-shaped)', 'Fast iteration', 'Led a 7-person team'] },
];

export default function SkillsLeadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px -80px 0px' });
  return (
    <section ref={ref} className="bg-off-white px-6 py-20 text-deep-navy">
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-md border-4 border-deep-navy bg-xtremery-blue px-4 py-1.5 text-sm font-black uppercase tracking-widest text-off-white shadow-[5px_5px_0_#111827]">
          Skills
        </span>
        <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
          Built to <span className="inline-block border-4 border-deep-navy bg-aqua-spark px-2 shadow-[6px_6px_0_#111827]">Ship</span>
        </h2>
        <p className="mt-5 max-w-3xl text-lg font-medium md:text-xl">
          Multi-engine game development plus production-grade engineering — built for fast iteration and autonomous
          ownership under ambiguity.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cats.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`rounded-xl border-4 border-deep-navy p-6 shadow-[8px_8px_0_#111827] ${c.accent} ${c.text}`}
              >
                <Icon className="h-9 w-9" strokeWidth={2.5} />
                <h3 className="mt-3 text-2xl font-black">{c.title}</h3>
                <ul className="mt-4 space-y-2">
                  {c.skills.map((s) => (
                    <li key={s} className="rounded-md border-[3px] border-deep-navy bg-off-white px-3 py-1.5 text-sm font-bold text-deep-navy shadow-[3px_3px_0_#111827]">
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
