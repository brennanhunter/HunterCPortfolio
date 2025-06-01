'use client';   

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { ChevronDown, Mail, Linkedin, Gamepad2, Users, Brain } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  const FloatingParticle = ({ delay = 0, size = 4, duration = 8 }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 opacity-60"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
      animate={{
        y: [-20, -60, -20],
        x: [-10, 10, -10],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} size={Math.random() * 6 + 2} duration={8 + Math.random() * 4} />
        ))}
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-transparent blur-3xl" />
        <div className="absolute bottom-40 right-32 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-60 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-300 to-transparent blur-2xl" />
        <div className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-gradient-to-br from-teal-300 to-transparent blur-2xl" />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={controls}
          className="absolute top-32 right-1/4 w-4 h-4 border-2 border-cyan-400 opacity-40"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            transition: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-400 opacity-30 transform rotate-45"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) rotate(45deg)`
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hunter Coleman
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto max-w-md mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl text-cyan-100 font-light"
            >
              Game Developer & Experience Designer
            </motion.p>
          </motion.div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <motion.blockquote
              className="text-2xl md:text-3xl text-white leading-relaxed font-light italic relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-cyan-300 text-6xl absolute -top-4 -left-4 opacity-50">&quot;</span>
              Life can be hard. Video games got me through difficult times — there&apos;s something magical about 
              <span className="text-cyan-300 font-medium"> flow</span>, and a great game provides what life sometimes can&apos;t.
              <span className="text-cyan-300 text-6xl absolute -bottom-8 -right-4 opacity-50">&quot;</span>
            </motion.blockquote>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
            >
              <Gamepad2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">3 Years UE5</h3>
              <p className="text-cyan-100">AI Systems, Behavior Trees, Level Design</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30"
            >
              <Brain className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Full Sail Graduate</h3>
              <p className="text-teal-100">Game Design Degree, Strong Foundation</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
            >
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Team Leader</h3>
              <p className="text-cyan-100">Led 7-person capstone team to success</p>
            </motion.div>
          </motion.div>

          {/* CTA and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="space-y-8"
          >
            <motion.p
              className="text-xl text-cyan-100 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              Looking to join a talented team building something extraordinary. 
              Let&apos;s create games that provide the flow and joy that make life better.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <motion.a
                href="mailto:huntercolemandesign@gmail.com"
                whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(8, 145, 178, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:from-cyan-400 hover:to-teal-400"
              >
                <Mail className="w-5 h-5" />
                Let&apos;s Connect
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/huntercgaming/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(13, 148, 136, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium border border-teal-400/30 transition-all duration-300 hover:bg-white/20"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-cyan-300"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;