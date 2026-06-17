'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Radio, Smartphone, ExternalLink } from 'lucide-react';

const boxTech = ['Next.js', 'AWS IVS', 'Stripe', 'Supabase / Postgres', 'S3', 'Geo-blocking', 'Referral tracking'];
const justrackTech = ['Cross-platform (iOS + Android)', 'Real-time state', 'Full release pipeline'];
const shots = ['/projects/boxstreamtv-home.jpg', '/projects/boxstreamtv-fight-pass.jpg', '/projects/boxstreamtv-vod.jpg'];
const justrackShots = ['/projects/justrack-1.jpg', '/projects/justrack-2.jpg', '/projects/justrack-3.jpg'];

const frame = 'overflow-hidden rounded-xl border-4 border-off-white shadow-[8px_8px_0_#00FFD1]';
const tag = 'rounded-md border-[3px] border-off-white bg-deep-navy px-3 py-1 text-xs font-bold';

export default function ShippedProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -100px 0px' });
  return (
    <section ref={ref} className="bg-deep-navy px-6 py-20 text-off-white">
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-md border-4 border-off-white bg-aqua-spark px-4 py-1.5 text-sm font-black uppercase tracking-widest text-deep-navy shadow-[5px_5px_0_#7C3AED]">
          Shipped Products
        </span>
        <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Real Products, Real Users</h2>
        <p className="mt-5 max-w-3xl text-lg font-medium text-off-white/80 md:text-xl">
          Full products owned end to end — from architecture to the app-store release pipeline.
        </p>

        {/* BoxStreamTV */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid items-center gap-8 lg:grid-cols-2"
        >
          <div>
            <div className="flex items-center gap-3">
              <Radio className="h-7 w-7 text-aqua-spark" strokeWidth={2.5} />
              <h3 className="text-3xl font-black">BoxStreamTV</h3>
            </div>
            <p className="mt-3 font-medium text-off-white/85">
              A live pay-per-view streaming platform built from scratch: low-latency video, secure checkout, an
              on-demand library, and subscriptions — a production system serving live fight audiences.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">{boxTech.map((t) => <span key={t} className={tag}>{t}</span>)}</div>
            <a
              href="https://www.glovesintheair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border-4 border-off-white bg-xtremery-purple px-5 py-2.5 font-black shadow-[5px_5px_0_#00FFD1] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1"
            >
              Visit the live platform <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className={`col-span-2 ${frame}`}><Image src={shots[0]} alt="BoxStreamTV home" width={2000} height={1150} className="h-auto w-full" /></div>
            <div className={frame}><Image src={shots[1]} alt="Fight Pass" width={2000} height={1150} className="h-auto w-full" /></div>
            <div className={frame}><Image src={shots[2]} alt="VOD library" width={2000} height={1150} className="h-auto w-full" /></div>
          </div>
        </motion.div>

        {/* JusTrack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 grid items-center gap-8 lg:grid-cols-2"
        >
          <div className="order-2 grid grid-cols-3 gap-3 lg:order-1">
            {justrackShots.map((s, i) => (
              <div key={s} className={frame}><Image src={s} alt={`JusTrack screen ${i + 1}`} width={600} height={1304} className="h-auto w-full" /></div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <Smartphone className="h-7 w-7 text-aqua-spark" strokeWidth={2.5} />
              <h3 className="text-3xl font-black">JusTrack</h3>
            </div>
            <p className="mt-3 font-medium text-off-white/85">
              A cross-platform basketball tracking app — shipped to the App Store and Google Play. I owned the UX flow,
              real-time state, and the full release pipeline on both platforms.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">{justrackTech.map((t) => <span key={t} className={tag}>{t}</span>)}</div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/us/app/justrack-basketball/id6758228246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-4 border-off-white bg-xtremery-blue px-5 py-2.5 font-black shadow-[5px_5px_0_#00FFD1] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1"
              >
                <Smartphone className="h-4 w-4" /> App Store
              </a>
              <span className="font-bold text-off-white/60">Also on Google Play</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
