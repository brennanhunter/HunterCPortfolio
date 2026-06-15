'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Radio, Smartphone, Rocket, ExternalLink } from 'lucide-react';

const boxTech = ['Next.js', 'AWS IVS (low-latency video)', 'Stripe', 'Supabase / Postgres', 'S3', 'Geo-blocking', 'Referral tracking'];
const justrackTech = ['Cross-platform (iOS + Android)', 'Real-time state', 'Full release pipeline'];

const shots = [
  '/projects/boxstreamtv-home.jpg',
  '/projects/boxstreamtv-fight-pass.jpg',
  '/projects/boxstreamtv-vod.jpg',
];

const ShippedProducts = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -100px 0px' });

  return (
    <div ref={ref} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-4">
              SHIPPED PRODUCTS
            </span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-6">
              Real Products, Real Users
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Beyond game prototypes — full products owned end to end, from architecture to the
              app-store release pipeline.
            </p>
          </motion.div>

          {/* BoxStreamTV */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Radio className="w-7 h-7 text-cyan-400" />
                  <h3 className="text-3xl font-bold text-white">BoxStreamTV</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  A live pay-per-view streaming platform built from scratch: low-latency live video,
                  secure checkout, an on-demand library, and subscriptions — a production system
                  serving live fight audiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  {boxTech.map((t) => (
                    <span key={t} className="bg-white/10 text-cyan-100 text-xs px-3 py-1 rounded-full border border-cyan-400/20">{t}</span>
                  ))}
                </div>
                <a
                  href="https://www.glovesintheair.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 font-medium hover:text-cyan-200 transition-colors"
                >
                  Visit the live platform <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Image src={shots[0]} alt="BoxStreamTV — PPV event home" width={2000} height={1150} className="col-span-2 rounded-xl border border-white/10 w-full h-auto shadow-2xl" />
                <Image src={shots[1]} alt="BoxStreamTV — Fight Pass subscriptions" width={2000} height={1150} className="rounded-xl border border-white/10 w-full h-auto" />
                <Image src={shots[2]} alt="BoxStreamTV — on-demand library" width={2000} height={1150} className="rounded-xl border border-white/10 w-full h-auto" />
              </div>
            </div>
          </motion.div>

          {/* JusTrack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                {/* Replace with phone screenshots when ready */}
                <div className="w-56 h-[420px] rounded-[2.2rem] border-4 border-white/15 bg-white/5 flex items-center justify-center text-center p-6">
                  <span className="text-blue-200/70 text-sm leading-relaxed">
                    Phone screenshots coming<br />— live on iOS &amp; Android
                  </span>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-5">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-7 h-7 text-cyan-400" />
                  <h3 className="text-3xl font-bold text-white">JusTrack</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  A cross-platform basketball tracking app — shipped to both the App Store and Google
                  Play. I owned the UX flow, real-time state, and the full release pipeline on both
                  platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  {justrackTech.map((t) => (
                    <span key={t} className="bg-white/10 text-cyan-100 text-xs px-3 py-1 rounded-full border border-cyan-400/20">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-full border border-cyan-400/30 hover:bg-white/20 transition-colors font-medium text-sm">
                    <Smartphone className="w-4 h-4" /> App Store
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-full border border-cyan-400/30 hover:bg-white/20 transition-colors font-medium text-sm">
                    <Rocket className="w-4 h-4" /> Google Play
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShippedProducts;
