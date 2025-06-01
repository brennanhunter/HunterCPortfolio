'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Heart, Zap, Users, Target, Gamepad2, Sparkles, Award, Globe } from 'lucide-react';

const PersonalMission = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const coreValues = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Flow Over Friction",
      description: "Games should provide the flow state that life sometimes cannot - moments of pure engagement and joy.",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessible Competition",
      description: "Balanced, skill-based experiences that welcome everyone while rewarding dedication and growth.",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Purposeful Entertainment",
      description: "Every design choice serves the player's experience - entertainment that enriches rather than just distracts.",
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Masterpiece Longing",
      description: "Great games leave you with a longing when completed - they become part of who you are.",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const personalJourney = [
    {
      title: "The Challenge",
      description: "Living with cerebral palsy taught me resilience, but also showed me how life can be difficult in ways others might not understand."
    },
    {
      title: "The Discovery", 
      description: "Video games became my refuge - not as escape, but as a place where I could experience flow, achievement, and pure joy."
    },
    {
      title: "The Realization",
      description: "Games have the power to provide what life sometimes cannot: perfect challenge, clear progress, and meaningful experiences."
    },
    {
      title: "The Mission",
      description: "Now I create games that offer others what games gave me - hope, flow, and the feeling that anything is possible."
    }
  ];

  const FloatingHeart = ({ delay = 0, size = 8, duration = 6 }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-20, -40, -20],
        x: [-5, 5, -5],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Heart className={`w-${size} h-${size} text-pink-300 opacity-40`} />
    </motion.div>
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-orange-900 overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.7} size={4 + Math.random() * 4} duration={6 + Math.random() * 3} />
        ))}
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-400 to-transparent blur-3xl" />
        <div className="absolute bottom-32 right-32 w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-amber-400 to-transparent blur-2xl" />
      </motion.div>

      <div className="relative z-10 min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
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
              className="inline-block bg-gradient-to-r from-pink-400 to-orange-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-4"
            >
              PERSONAL MISSION
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent mb-6">
              Why I Create
            </h2>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Games saved me when life was hardest. Now I create experiences that provide 
              the flow, joy, and sense of possibility that every person deserves.
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
              <motion.blockquote
                className="text-2xl md:text-3xl text-white leading-relaxed font-light text-center mb-8 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-pink-400 text-6xl absolute -top-6 -left-4 opacity-50">"</span>
                I have cerebral palsy, and as sad as it may be, video games got me through a lot of hard times. 
                There is something great about <span className="text-pink-300 font-medium">flow</span> - and life has a hard time providing flow. 
                A great game is a masterpiece and leaves you with a longing when completed.
                <span className="text-pink-400 text-6xl absolute -bottom-12 -right-4 opacity-50">"</span>
              </motion.blockquote>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">My Journey</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalJourney.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 h-full">
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-pink-400 to-orange-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-white mt-2 mb-3">{step.title}</h4>
                    <p className="text-pink-100 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              What Drives My Design
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} text-white`}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-pink-100 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-6"
              >
                <Gamepad2 className="w-16 h-16 text-pink-400 mx-auto" />
                <h3 className="text-3xl font-bold text-white">
                  Let's Build Something Extraordinary
                </h3>
                <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
                  I want to join a team that believes games can make life better. 
                  Together, we can create experiences that provide flow, challenge, and joy to players who need it most.
                </p>
                <blockquote className="text-lg text-pink-200 italic">
                  "Entertainment is what fuels me. Life can be hard - let's make games that help."
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalMission;