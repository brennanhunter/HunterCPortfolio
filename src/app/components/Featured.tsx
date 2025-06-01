'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Play, Brain, Zap, Target, Code, Lightbulb } from 'lucide-react';

const FeaturedProject = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
const isInView = useInView(containerRef, { 
  once: true, 
  amount: 0.1,  // Reduced from 0.3 to 0.1
  margin: "0px 0px -100px 0px"  // Trigger earlier
});  
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Better loading detection - Fix 2
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2000); // Show video after 2 seconds regardless

    return () => clearTimeout(timer);
  }, []);

  const philosophyPoints = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Dual Purpose Design",
      description: "Every ability serves both puzzle and combat — strategic depth through constraint."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Combat as Puzzle",
      description: "Choosing the right ability at the right time — tactics over reflexes."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Teaching Through Doing",
      description: "Every level is a lesson. First we teach, then we test."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Empowering Curiosity",
      description: "Players feel clever, not guided — discovery beats instruction."
    }
  ];

  const technicalAchievements = [
    {
      title: "AI Enemy Coordination",
      description: "Developed behavior trees enabling enemies to work together, alternating attacks and responding to player actions",
      highlight: "Behavior Trees"
    },
    {
      title: "Environmental Pacing",
      description: "Designed level flow that teaches mechanics naturally without tutorials through environmental storytelling",
      highlight: "Level Design"
    },
    {
      title: "Team Leadership", 
      description: "Led 7-person capstone team, managing creative conflicts and ensuring everyone's voice was heard",
      highlight: "Leadership"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400 to-transparent blur-3xl" />
        <div className="absolute bottom-40 left-32 w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="relative z-10 min-h-screen flex items-center py-20 px-6"
      >
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
              className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-4"
            >
              FEATURED PROJECT
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-6">
              Dawn and Dusk
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              A puzzle-platformer where every mechanic serves dual purposes. My capstone project showcasing 
              AI coordination, environmental storytelling, and team leadership with 7 developers.
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
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-teal-900 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
                      />
                    </div>
                  )}
                  <iframe
                    src="https://www.youtube.com/embed/r3SEvl1vqFs?enablejsapi=1&origin=https://huntercportfolio.com&autoplay=0&rel=0&modestbranding=1"
                    title="Dawn and Dusk Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </motion.div>
                
                {/* Video Overlay Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-black/60 backdrop-blur-sm rounded-lg p-2 md:p-4"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    <span className="text-white font-medium text-sm md:text-base">Capstone Project Trailer</span>
                    <span className="text-cyan-300 text-xs md:text-sm hidden sm:inline">UE5 • Blueprints • Team of 7</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                7-Person Team
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Technical Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-cyan-400" />
                  Technical Achievements
                </h3>
                <div className="space-y-4">
                  {technicalAchievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <span className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                          {achievement.highlight}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mt-2 mb-1">{achievement.title}</h4>
                      <p className="text-cyan-100 text-sm leading-relaxed">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Design Philosophy Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Design Philosophy in Action
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">
                    {point.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                  <p className="text-cyan-100 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl md:text-2xl text-cyan-100 italic max-w-4xl mx-auto relative">
              <span className="text-cyan-400 text-4xl absolute -top-4 -left-4 opacity-50">&quot;</span>
              Every level is a lesson. First, we teach; then we test. The game is most rewarding when players feel clever, not guided.
              <span className="text-cyan-400 text-4xl absolute -bottom-6 -right-4 opacity-50">&quot;</span>
            </blockquote>
            <cite className="text-cyan-300 mt-4 block">— Design Philosophy, Dawn and Dusk</cite>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;