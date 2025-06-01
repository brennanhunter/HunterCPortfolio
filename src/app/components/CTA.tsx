'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Mail, Linkedin, Send, Gamepad2, Users, Brain, Zap, Heart, Star, ArrowRight, Copy, CheckCircle } from 'lucide-react';

const ContactCTA = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [emailCopied, setEmailCopied] = useState(false);

  const valueProps = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Design Philosophy",
      description: "Every mechanic serves dual purposes - strategic depth through thoughtful constraint"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Technical Innovation", 
      description: "AI coordination, behavior trees, and creative solutions under pressure"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Proven Leadership",
      description: "Successfully led 7-person team through conflict to successful delivery"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Personal Mission",
      description: "Games as flow experiences that provide what life sometimes cannot"
    }
  ];

  const projectHighlights = [
    { name: "Dawn and Dusk", role: "AI Systems & Team Lead", team: "7 people" },
    { name: "Shadow Mind", role: "One-Button Innovation", constraint: "Creative constraint" },
    { name: "Bounce Target", role: "Family to Digital", story: "Personal story" },
    { name: "Game Jam", role: "24-Hour Leadership", pressure: "High pressure" }
  ];

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('huntercolemandesign@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const FloatingStar = ({ delay = 0, size = 4, duration = 8 }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-10, -30, -10],
        x: [-5, 5, -5],
        opacity: [0.4, 0.8, 0.4],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Star className={`w-${size} h-${size} text-cyan-300 opacity-60`} />
    </motion.div>
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 overflow-hidden">
      {/* Floating Stars Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <FloatingStar key={i} delay={i * 0.4} size={3 + Math.random() * 3} duration={6 + Math.random() * 4} />
        ))}
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400 to-transparent blur-3xl" />
        <div className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-300 to-transparent blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <div className="relative z-10 min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Main CTA Section */}
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
              className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-6"
            >
              READY TO BUILD SOMETHING EXTRAORDINARY
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-8"
            >
              Let's Connect
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              I'm looking for a team that believes games can change lives. 
              Together, we can create experiences that provide flow, challenge, and joy.
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.a
                href="mailto:huntercolemandesign@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(8, 145, 178, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:from-cyan-400 hover:to-teal-400 shadow-2xl"
              >
                <Mail className="w-6 h-6" />
                Start the Conversation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                onClick={handleEmailCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-full font-medium border border-cyan-400/30 transition-all duration-300 hover:bg-white/20 hover:border-cyan-400/50"
              >
                {emailCopied ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Email
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-cyan-400" />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-cyan-200 text-sm">huntercolemandesign@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.a
                  href="https://www.linkedin.com/in/huntercgaming/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 block"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-cyan-200 text-sm">huntercgaming</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* What I Bring */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Gamepad2 className="w-6 h-6 text-teal-400" />
                What I Bring
              </h3>
              
              <div className="grid gap-4">
                {valueProps.map((prop, index) => (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-teal-400 mt-1">
                      {prop.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{prop.title}</h4>
                      <p className="text-teal-200 text-xs leading-relaxed">{prop.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 mb-12"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-8">Portfolio Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectHighlights.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-white font-bold mb-1">{project.name}</h4>
                  <p className="text-cyan-300 text-sm mb-2">{project.role}</p>
                  <span className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 px-2 py-1 rounded text-xs font-bold">
                    {project.team || project.constraint || project.story || project.pressure}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center"
          >
            <blockquote className="text-xl md:text-2xl text-cyan-100 italic max-w-4xl mx-auto relative leading-relaxed">
              <span className="text-cyan-400 text-4xl absolute -top-4 -left-4 opacity-50">"</span>
              Ready to join a team that's building something extraordinary. 
              Let's create games that provide the flow and wonder this world needs.
              <span className="text-cyan-400 text-4xl absolute -bottom-6 -right-4 opacity-50">"</span>
            </blockquote>
            <cite className="text-cyan-300 mt-6 block text-lg font-medium">- Hunter Coleman</cite>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;