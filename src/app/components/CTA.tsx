'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Copy, CheckCircle, ArrowRight } from 'lucide-react';

const props: [string, string, string, string][] = [
  ['Multi-Engine Prototyping', 'UE5 + Blueprints, O3DE, Godot, Defold', 'bg-aqua-spark', 'text-deep-navy'],
  ['Ships End to End', 'From UE5 systems to a live streaming platform and apps on both stores', 'bg-xtremery-purple', 'text-off-white'],
  ['Systems & Tools', 'Builds the systems and tools that speed up the whole team', 'bg-xtremery-blue', 'text-off-white'],
  ['Autonomous Ownership', 'Takes ambiguous problems from concept to production, solo', 'bg-off-white', 'text-deep-navy'],
];

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText('huntercolemandesign@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section className="bg-deep-navy px-6 py-24 text-off-white">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-md border-4 border-off-white bg-aqua-spark px-4 py-1.5 text-sm font-black uppercase tracking-widest text-deep-navy shadow-[5px_5px_0_#7C3AED]">
          Let&apos;s Work Together
        </span>
        <h2 className="mt-6 text-5xl font-black uppercase md:text-7xl">
          Let&apos;s <span className="inline-block border-4 border-off-white bg-xtremery-purple px-3 shadow-[8px_8px_0_#00FFD1]">Connect</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-off-white/80 md:text-xl">
          Looking for a Technical Game Designer role where I can prototype systems and ship the tools that unlock a team.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:huntercolemandesign@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border-4 border-off-white bg-xtremery-purple px-6 py-3 text-lg font-black shadow-[6px_6px_0_#00FFD1] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1"
          >
            <Mail className="h-5 w-5" /> Email Me <ArrowRight className="h-5 w-5" />
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-lg border-4 border-off-white bg-off-white px-6 py-3 text-lg font-black text-deep-navy shadow-[6px_6px_0_#00FFD1] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1"
          >
            {copied ? (<><CheckCircle className="h-5 w-5" /> Copied!</>) : (<><Copy className="h-5 w-5" /> Copy Email</>)}
          </button>
          <a
            href="https://www.linkedin.com/in/huntercdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-4 border-off-white bg-xtremery-blue px-6 py-3 text-lg font-black shadow-[6px_6px_0_#00FFD1] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </div>

        <div className="mt-14 grid gap-5 text-left sm:grid-cols-2">
          {props.map(([t, d, bg, tx]) => (
            <div key={t} className={`rounded-xl border-4 border-off-white p-5 shadow-[6px_6px_0_#00FFD1] ${bg} ${tx}`}>
              <h3 className="text-lg font-black">{t}</h3>
              <p className="mt-1 font-medium">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
