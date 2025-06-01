'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Lightbulb, MousePointer, Puzzle, Zap, Play, Eye, Clock, Target } from 'lucide-react';

const InnovationShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const innovationPrinciples = [
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: "One Button Rule",
      description: "Self-imposed constraint that forced creative solutions and amplified decision-making pressure.",
      highlight: "Constraint Design"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Teaching Without Words",
      description: "Like Mario, the game teaches through interaction and discovery, not instruction or text.",
      highlight: "Environmental Teaching"
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Timing as Decision",
      description: "Under the one-button constraint, when to act becomes as important as what action to take.",
      highlight: "Temporal Mechanics"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Limitation Breeds Creativity",
      description: "Anti-gravity and ice-sliding mechanics emerged directly from the one-button challenge.",
      highlight: "Emergent Design"
    }
  ];

  const designHighlights = [
    {
      title: "Moveable Platforms",
      description: "Left-click activates pillars and platforms - simple input, complex spatial reasoning required"
    },
    {
      title: "Anti-Gravity Zones", 
      description: "Environmental mechanics that evolved from the constraint, adding verticality and flow"
    },
    {
      title: "Ice Sliding",
      description: "Momentum-based movement that creates timing puzzles within the one-button framework"
    },
    {
      title: "Logic + Timing Fusion",
      description: "Puzzles blend spatial reasoning with precise timing - knowing what AND when to activate"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-32 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-5"
      >
        {/* Floating geometric shapes */}
        <motion.div
          style={{ rotate }}
          className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-purple-400"
        />
        <motion.div
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -360]) }}
          className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-400 transform rotate-45"
        />
      </motion.div>

      <div className="relative z-10 min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-purple-400 to-indigo-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-4"
            >
              INNOVATION SHOWCASE
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent mb-6">
              Shadow Mind
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              A self-imposed challenge: create a compelling game using only one button. 
              The result - innovative mechanics that emerged from creative constraint.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative aspect-video"
                >
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full"
                      />
                    </div>
                  )}
                  <iframe
                    src="https://www.youtube.com/embed/M6s9ebqlRi8"
                    title="Shadow Mind Development Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => setIsVideoLoaded(true)}
                  />
                </motion.div>
                
                {/* Video Overlay Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <Play className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Early Development</span>
                    <span className="text-purple-300 text-sm">One Button • UE5 • Constraint Design</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Constraint Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                One Button Only
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* The Challenge */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-purple-400" />
                  The Challenge
                </h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Create a compelling game using only left-click. No movement keys, no complex inputs - 
                  just one button and the creativity to make it engaging.
                </p>
                <blockquote className="text-lg text-purple-200 italic border-l-4 border-purple-400 pl-4">
                  "Timing becomes a decision, not just a skill."
                </blockquote>
              </div>

              {/* Design Highlights */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-indigo-400" />
                  Emergent Mechanics
                </h3>
                <div className="grid gap-3">
                  {designHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300"
                    >
                      <h4 className="text-white font-medium text-sm">{highlight.title}</h4>
                      <p className="text-purple-200 text-xs mt-1">{highlight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Innovation Principles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Innovation Through Constraint
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovationPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-400">
                      {principle.icon}
                    </div>
                    <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-slate-900 px-2 py-1 rounded text-xs font-bold">
                      {principle.highlight}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                  <p className="text-purple-100 text-sm leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl md:text-2xl text-purple-100 italic max-w-4xl mx-auto relative">
              <span className="text-purple-400 text-4xl absolute -top-4 -left-4 opacity-50">"</span>
              A good puzzle reveals the answer was hiding in plain sight. Limitation breeds creativity - and challenge.
              <span className="text-purple-400 text-4xl absolute -bottom-6 -right-4 opacity-50">"</span>
            </blockquote>
            <cite className="text-purple-300 mt-4 block">- The "Aha!" Philosophy, Shadow Mind</cite>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InnovationShowcase;