'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Code, Users, MessageSquare, Gamepad2, Heart } from 'lucide-react';

const SkillsLeadership = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  // Better mobile detection and intersection observer
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isInView = useInView(containerRef, { 
    once: true, 
    amount: isMobile ? 0.01 : 0.1,  // Much lower threshold for mobile
    margin: "-50px 0px -50px 0px"  // Trigger earlier
  });
  
  type SkillCategoryKey = 'game-dev' | 'technical' | 'leadership';

  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategoryKey>('game-dev');

  const skillCategories: Record<SkillCategoryKey, {
    title: string;
    icon: React.ReactNode;
    color: string;
    skills: { name: string; level: number; description: string }[];
  }> = {
    'game-dev': {
      title: 'Game Development',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: 'from-emerald-400 to-teal-400',
      skills: [
        { name: 'Unreal Engine 5', level: 90, description: 'Blueprints, C++, Level Design, AI Systems' },
        { name: 'Behavior Trees', level: 85, description: 'Complex AI coordination and enemy behaviors' },
        { name: 'Level Design', level: 80, description: 'Environmental storytelling and pacing' },
        { name: 'Game Design', level: 90, description: 'Full Sail degree, strong theoretical foundation' },
        { name: 'Blender', level: 70, description: 'Asset creation and basic 3D modeling' }
      ]
    },
    'technical': {
      title: 'Technical Skills',
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-400 to-indigo-400',
      skills: [
        { name: 'JavaScript/React', level: 85, description: 'Modern web development, Next.js applications' },
        { name: 'AI Integration', level: 80, description: 'Combining AI tools with game development workflows' },
        { name: 'Version Control', level: 85, description: 'Git, GitHub Desktop, Perforce expertise' },
        { name: 'Blueprint Systems', level: 90, description: 'Complex gameplay and UI systems in UE5' },
        { name: 'Problem Solving', level: 95, description: 'Creative solutions under constraints' }
      ]
    },
    'leadership': {
      title: 'Leadership & Soft Skills',
      icon: <Users className="w-5 h-5" />,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Team Leadership', level: 90, description: 'Led 7-person capstone team to success' },
        { name: 'Conflict Resolution', level: 85, description: 'Direct but empathetic approach to team issues' },
        { name: 'Creative Direction', level: 80, description: 'Balancing vision with team input' },
        { name: 'Mentoring', level: 85, description: 'Supporting teammates and fostering growth' },
        { name: 'Communication', level: 90, description: 'Clear, honest, and constructive feedback' }
      ]
    }
  };

  const leadershipStory = {
    challenge: "During our 7-person capstone project, Ki was dominating the creative process and dismissing others' ideas, despite being talented.",
    action: "I addressed it directly in group chat, stating that everyone needed a voice and that the best results come from hearing all perspectives.",
    resolution: "Ki talked with me, Austin, and Aaron for an hour and a half. He was just excited, and the conversation really helped our relationship.",
    outcome: "The team became more collaborative, everyone felt heard, and we delivered a successful capstone project together.",
    philosophy: "I don't mind addressing conflict - I stay focused on the big picture and believe everyone deserves to be heard."
  };

  const teamMembers = [
    { name: 'Austin', role: 'Sociable Right-Hand', description: 'My trusted collaborator and team connector' },
    { name: 'Stephen', role: 'Best Level Designer', description: 'Created incredible environmental experiences' },
    { name: 'Ki', role: 'Talented Developer', description: 'Skilled but needed guidance on collaboration' }
  ];

  type Skill = { name: string; level: number; description: string };

  const SkillBar = ({
    skill,
    delay = 0,
  }: {
    skill: Skill;
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-medium">{skill.name}</h4>
        <span className="text-emerald-300 text-sm font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full"
        />
      </div>
      <p className="text-emerald-100 text-sm">{skill.description}</p>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-32 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-32 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-5"
      >
        <motion.div
          style={{ rotate }}
          className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-emerald-400"
        />
        <motion.div
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-teal-400 to-emerald-400 transform rotate-45"
        />
      </motion.div>

      <div className="relative z-10 min-h-screen py-20 px-6">
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
              className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-4"
            >
              SKILLS & LEADERSHIP
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Combining deep technical skills with proven leadership abilities. 
              I build both great code and great teams.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Skill Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveSkillCategory(key as SkillCategoryKey)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeSkillCategory === key
                        ? `bg-gradient-to-r ${category.color} text-slate-900`
                        : 'bg-white/10 text-emerald-100 hover:bg-white/20'
                    }`}
                  >
                    {category.icon}
                    <span className="text-sm">{category.title}</span>
                  </motion.button>
                ))}
              </div>

              {/* Active Skills Display */}
              <motion.div
                key={activeSkillCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  {skillCategories[activeSkillCategory].icon}
                  {skillCategories[activeSkillCategory].title}
                </h3>
                
                {skillCategories[activeSkillCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
                ))}
              </motion.div>
            </motion.div>

            {/* Leadership Story Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Leadership Philosophy */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-emerald-400" />
                  Leadership Philosophy
                </h3>
                <blockquote className="text-lg text-emerald-100 italic leading-relaxed">
                  &quot;I don&apos;t mind addressing conflict. I stay focused on the big picture and believe 
                  the best results come from everyone having a voice and feeling heard.&quot;
                </blockquote>
              </div>

              {/* Team Conflict Resolution Story */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-teal-400" />
                  Real Leadership in Action
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-emerald-300 font-semibold mb-2">The Challenge</h4>
                    <p className="text-emerald-100 text-sm leading-relaxed">{leadershipStory.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-emerald-300 font-semibold mb-2">My Action</h4>
                    <p className="text-emerald-100 text-sm leading-relaxed">{leadershipStory.action}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-emerald-300 font-semibold mb-2">The Resolution</h4>
                    <p className="text-emerald-100 text-sm leading-relaxed">{leadershipStory.resolution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-emerald-300 font-semibold mb-2">The Outcome</h4>
                    <p className="text-emerald-100 text-sm leading-relaxed">{leadershipStory.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-emerald-400" />
                  My Capstone Team
                </h3>
                <div className="space-y-3">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                          {member.name[0]}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{member.name}</h4>
                          <p className="text-emerald-300 text-sm">{member.role}</p>
                          <p className="text-emerald-100 text-xs">{member.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20">
              <blockquote className="text-xl md:text-2xl text-emerald-100 italic max-w-4xl mx-auto relative leading-relaxed">
                <span className="text-emerald-400 text-4xl absolute -top-4 -left-4 opacity-50">&quot;</span>
                Great teams are built on trust, clear communication, and making sure everyone feels heard. 
                Technical skills get you hired - leadership skills make you invaluable.
                <span className="text-emerald-400 text-4xl absolute -bottom-6 -right-4 opacity-50">&quot;</span>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsLeadership;