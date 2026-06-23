import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaBrain, FaCode, FaRobot, FaServer, FaTimes, FaChevronLeft, FaChevronRight, FaGlobe, FaMobileAlt, FaShoppingCart, FaBolt, FaPaintBrush } from 'react-icons/fa';
import ParticleBackground from '@/components/ParticleBackground';
import GlitchText from '@/components/GlitchText';
import Typewriter from '@/components/Typewriter';

const salesImages = [
  "/sales-1.png",
  "/sales-2.png",
  "/sales-3.png",
  "/sales-4.png",
  "/sales-5.png",
  "/sales-6.png",
];

const fitaiImages = [
  "/fitai-1.png",
  "/fitai-2.png",
];

const docImages = [
  "/doc-1.png",
  "/doc-2.png",
  "/doc-3.png",
  "/doc-4.png",
  "/doc-5.png",
  "/doc-6.png",
];

const constImages = [
  "/const-1.png",
  "/const-2.png",
  "/const-3.png",
  "/const-4.png",
  "/const-5.png",
  "/const-6.png",
  "/const-7.png",
  "/const-8.png",
];

const Home = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; idx: number; images: string[]; label: string }>({ open: false, idx: 0, images: [], label: "" });

  const openLightbox = (idx: number, images: string[], label: string) => setLightbox({ open: true, idx, images, label });
  const closeLightbox = () => setLightbox(l => ({ ...l, open: false }));
  const prevImg = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => ({ ...l, idx: (l.idx - 1 + l.images.length) % l.images.length })); };
  const nextImg = (e: React.MouseEvent) => { e.stopPropagation(); setLightbox(l => ({ ...l, idx: (l.idx + 1) % l.images.length })); };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const projects = [
    {
      title: "AI Sales Assistant for Retail",
      stack: ["Python", "AWS", "LLM Workflows"],
      color: "border-primary",
      glow: "neon-border-green",
      images: salesImages,
      desc: [
        "AI-based sales assistant for automating customer queries and improving product suggestions.",
        "Prompt-driven workflows for personalized interactions and structured response generation.",
        "REST APIs and AWS automation workflows for lead handling.",
        "Reporting dashboards for customer behavior analysis."
      ]
    },
    {
      title: "AI Customer Engagement System",
      stack: ["Prompt Engineering", "Generative AI"],
      color: "border-secondary",
      glow: "neon-border-cyan",
      images: fitaiImages,
      desc: [
        "AI-powered customer engagement platform for lead conversion and retention.",
        "Automated workflows for inquiry handling, personalized recommendations, and follow-ups.",
        "Prompt-based AI interactions and structured outputs for business operations."
      ]
    },
    {
      title: "Construction Delay Root Cause Analyzer",
      stack: ["Python", "Spark", "Hadoop", "Random Forest", "Streamlit"],
      color: "border-accent",
      glow: "neon-border-purple",
      images: constImages,
      desc: [
        "Predicts construction delays using a Random Forest Classifier with ~96% accuracy and 0.97 F1 score.",
        "Identifies root causes of delays — labor shortage, material delays, weather, poor planning, or regulatory issues.",
        "Handles large-scale data via Hadoop (HDFS) and Apache Spark/PySpark for efficient distributed processing.",
        "Interactive Streamlit dashboard for instant delay prediction, root cause analysis, and visual insights."
      ]
    },
    {
      title: "AI Document Intelligence System",
      stack: ["Python", "LLM", "Vector DB"],
      color: "border-primary",
      glow: "neon-border-green",
      images: docImages,
      desc: [
        "Built a RAG (Retrieval-Augmented Generation) pipeline for document Q&A.",
        "Chunking strategies, embeddings, and semantic search over company knowledge bases.",
        "Used for automated report generation and structured data extraction."
      ]
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "Java", "SQL", "C++ (Basic)"], icon: <FaCode />, color: "text-primary border-primary hover:bg-primary/20" },
    { category: "Generative AI & LLMs", items: ["Prompt Engineering", "LLM Fundamentals", "Structured Outputs", "AI Workflows", "OpenCV", "LangChain", "RAG"], icon: <FaBrain />, color: "text-secondary border-secondary hover:bg-secondary/20" },
    { category: "AI Tools & Automation", items: ["ChatGPT", "GitHub Copilot", "Workflow Automation", "Prompt Optimization", "OpenAI API"], icon: <FaRobot />, color: "text-accent border-accent hover:bg-accent/20" },
    { category: "Software Engineering", items: ["REST APIs", "JSON", "Git/GitHub", "DBMS", "AWS", "Vector Databases"], icon: <FaServer />, color: "text-primary border-primary hover:bg-primary/20" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <ParticleBackground />
      <div className="scanlines"></div>
      
      {/* Navbar placeholder - keeping it simple or omitting for full immersion */}
      
      <main className="relative z-10 container mx-auto px-6 pt-24 pb-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center items-start pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1 min-w-0 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,255,136,0.3)] backdrop-blur-sm">
                System Initialized // Status: Online
              </div>
              
              <GlitchText 
                text="POOVARASU V" 
                className="font-black tracking-tighter whitespace-nowrap" 
                style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" } as React.CSSProperties}
              />
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-display text-muted-foreground h-12 flex items-center">
                <span className="mr-3">{'>'}</span> 
                <Typewriter 
                  words={["Prompt Engineer", "Generative AI Developer", "LLM Workflow Architect"]} 
                />
              </div>

              <p className="text-muted-foreground max-w-xl text-lg mt-4 leading-relaxed">
                Bridging AI intelligence with real business impact. I build systems that talk to customers, analyze data, and automate the impossible.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <a href="mailto:poovarasu16v@gmail.com" className="flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 neon-border-green uppercase font-bold text-sm tracking-wider">
                  <FaEnvelope /> Initialize Contact
                </a>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/poovarasuv" target="_blank" rel="noreferrer" className="p-3 border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 neon-border-cyan">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/PoovarasuV" target="_blank" rel="noreferrer" className="p-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 neon-border-purple">
                    <FaGithub size={20} />
                  </a>
                  <a href="tel:+916383213966" className="p-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 neon-border-green">
                    <FaPhoneAlt size={20} />
                  </a>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] shrink-0 mx-auto md:mx-0"
            >
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-[-10px] rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-xl"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(0,255,136,0.4)] z-10 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-card relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-20"></div>
                  <img 
                    src={import.meta.env.BASE_URL.replace(/\/$/, "") + "/poovarasu-profile.jpg"} 
                    alt="Poovarasu V" 
                    className="w-full h-full object-cover filter contrast-125 saturate-110 grayscale-[20%]"
                    onError={(e) => {
                      // Fallback if image not found
                      (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Poovarasu+V&background=000&color=00ff88&size=512";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center">
            <span className="text-secondary mr-4">01.</span> 
            <span className="neon-text-cyan">Neural_Architecture</span> (About)
          </motion.h2>
          
          <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent group-hover:h-[120%] transition-all duration-700"></div>
            <p className="text-xl leading-relaxed text-muted-foreground">
              <strong className="text-white font-display">M.Tech (Integrated) Software Engineering</strong> student at VIT Vellore (2022–Present, CGPA: 7.78). 
              Highly skilled in building <span className="text-primary font-bold">LLM-powered workflows</span>, automation solutions, and AI-assisted software development. 
              I don't just write prompts; I engineer robust AI systems that solve complex, real-world operational challenges.
            </p>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center">
            <span className="text-primary mr-4">02.</span> 
            <span className="neon-text-green">Execution_Logs</span> (Experience)
          </motion.h2>
          
          <motion.div variants={itemVariants} className="relative pl-8 md:pl-0">
            {/* Timeline line on mobile, hidden on desktop */}
            <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-primary/30 md:hidden"></div>
            
            <div className="relative border border-primary/20 bg-card/40 backdrop-blur-sm p-6 md:p-8 hover:border-primary/50 transition-colors duration-300">
              {/* Timeline dot */}
              <div className="absolute left-[-33px] top-8 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_#00ff88] md:hidden"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">AI & Analytics Intern</h3>
                  <p className="text-primary text-lg mt-1">SV Builders, Vellore</p>
                </div>
                <div className="font-mono text-muted-foreground mt-2 md:mt-0 px-3 py-1 border border-white/10 bg-black/50 text-sm">
                  May 2025 – July 2025
                </div>
              </div>
              
              <ul className="space-y-4 mt-6">
                {[
                  "Built a computer vision system (OpenCV/YOLO) to detect floor plans and estimate material requirements.",
                  "Developed predictive models for project cost and duration estimation (Pandas, NumPy).",
                  "Built vision AI to track brick usage and detect material theft on-site.",
                  "Built LLM-assisted workflows and structured AI outputs for reporting and productivity."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center">
            <span className="text-accent mr-4">03.</span> 
            <span className="neon-text-purple">Deployed_Modules</span> (Projects)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`group relative bg-card border ${project.color}/30 p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${project.glow}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <FaCode className={`text-2xl text-${project.color.split('-')[1]}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-display text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map(tech => (
                    <span key={tech} className={`text-xs font-mono px-2 py-1 bg-black border ${project.color}/50 text-white/80`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {project.desc.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-${project.color.split('-')[1]} mr-2`}>›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {'images' in project && project.images && (
                  <div className="mt-6">
                    <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">// Screenshots</p>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent">
                      {(project.images as string[]).map((src, i) => (
                        <button
                          key={i}
                          onClick={() => openLightbox(i, project.images as string[], project.title)}
                          className="relative shrink-0 w-40 h-24 overflow-hidden border border-primary/30 hover:border-primary transition-all duration-300 group/thumb"
                          data-testid={`project-screenshot-${i}`}
                        >
                          <img
                            src={src}
                            alt={`Screenshot ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/10 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                            <span className="text-primary text-xs font-mono">[ view ]</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FENZO FREELANCING SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center">
            <span className="text-secondary mr-4">04.</span>
            <span className="neon-text-cyan">Freelance_Studio</span> (Fenzo Web Design)
          </motion.h2>

          {/* Brand banner */}
          <motion.div variants={itemVariants} className="relative mb-12 border border-secondary/30 bg-gradient-to-r from-secondary/5 to-accent/5 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-accent"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-secondary/5 blur-2xl"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl font-black font-display tracking-tight mb-1">
                  <span className="neon-text-cyan">FENZO</span>{' '}
                  <span className="text-white">WEB DESIGN</span>
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                  Building digital products that help companies scale faster — websites, mobile apps, e-commerce platforms, AI solutions, business automation systems, and logo designs.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                {[
                  { icon: <FaGlobe />, label: "Websites" },
                  { icon: <FaMobileAlt />, label: "Mobile Apps" },
                  { icon: <FaShoppingCart />, label: "E-Commerce" },
                  { icon: <FaBolt />, label: "AI Solutions" },
                  { icon: <FaPaintBrush />, label: "Logo Design" },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2 px-3 py-2 border border-secondary/40 bg-black/40 text-secondary text-sm font-mono">
                    {s.icon} {s.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Client project cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                client: "Dr. Sushma Dental Clinic",
                type: "Healthcare Website",
                color: "border-secondary",
                textColor: "text-secondary",
                icon: "🦷",
                tags: ["React", "Tailwind CSS", "Responsive Design"],
                images: ["/dental-1.png","/dental-2.png","/dental-3.png","/dental-4.png","/dental-5.png","/dental-6.png","/dental-7.png","/dental-8.png","/dental-9.png","/dental-10.png"],
                points: [
                  "Customized clinic website with appointment booking and service showcase.",
                  "Patient-friendly UI with treatment gallery and doctor profile.",
                  "Mobile-responsive design optimized for local SEO.",
                ]
              },
              {
                client: "RoleX Fitness Studio",
                type: "Fitness & Gym Website",
                color: "border-primary",
                textColor: "text-primary",
                icon: "💪",
                tags: ["React", "Animations", "Membership Portal"],
                images: ["/rolex-1.png","/rolex-2.png","/rolex-3.png","/rolex-4.png","/rolex-5.png","/rolex-6.png"],
                points: [
                  "Dynamic fitness studio website with class schedules and trainer profiles.",
                  "Membership plan showcase with lead capture and inquiry forms.",
                  "High-energy design with bold visuals and animated sections.",
                ]
              },
              {
                client: "Online Education Platform",
                type: "EdTech Website",
                color: "border-accent",
                textColor: "text-accent",
                icon: "🎓",
                tags: ["React", "Course Catalog", "LMS UI"],
                points: [
                  "Customized e-learning platform with course catalog and student dashboard.",
                  "Instructor profiles, video lesson previews, and enrollment flows.",
                  "Scalable UI designed for growing course libraries.",
                ]
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative bg-card border ${project.color}/30 p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:${project.color}/60`}
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <span className={`text-xs font-mono uppercase tracking-widest ${project.textColor} mb-2`}>{project.type}</span>
                <h3 className="text-xl font-bold font-display text-white mb-4">{project.client}</h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs font-mono px-2 py-1 bg-black border ${project.color}/40 text-white/70`}>{tag}</span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-5">
                  {project.points.map((pt, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`${project.textColor} mr-2 mt-0.5`}>›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                {'images' in project && project.images && (
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className={`text-xs font-mono uppercase tracking-widest ${project.textColor} mb-3`}>[ screenshots ]</p>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                      {(project.images as string[]).map((src, i) => (
                        <button
                          key={i}
                          onClick={() => openLightbox(i, project.images as string[], project.client)}
                          className={`relative shrink-0 w-28 h-16 overflow-hidden border ${project.color}/30 hover:${project.color} transition-all duration-300`}
                        >
                          <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                          <div className="absolute inset-0 bg-black/40 hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <span className={`${project.textColor} text-xs font-mono`}>[ view ]</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center">
            <span className="text-primary mr-4">05.</span> 
            <span className="neon-text-green">Core_Capabilities</span> (Skills)
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="border border-white/10 bg-card/30 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 border bg-black/50 ${skillGroup.color.split(' ')[1]} ${skillGroup.color.split(' ')[0]}`}>
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map(skill => (
                    <span 
                      key={skill} 
                      className={`px-3 py-1.5 border font-mono text-sm transition-colors duration-300 cursor-default ${skillGroup.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-32 border-t border-white/10 text-center flex flex-col items-center justify-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">
              <span className="neon-text-cyan">System.</span><span className="text-white">connect()</span>
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mb-12">
            Currently exploring new opportunities. Whether you have a question, a project, or just want to talk AI architectures — my inbox is always open.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a 
              href="mailto:poovarasu16v@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 neon-border-green uppercase font-black tracking-widest text-lg"
            >
              <FaEnvelope /> Let's Build
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-20 flex gap-8">
            <a href="https://linkedin.com/in/poovarasuv" className="text-muted-foreground hover:text-secondary hover:drop-shadow-[0_0_10px_#00ffff] transition-all">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/PoovarasuV" className="text-muted-foreground hover:text-accent hover:drop-shadow-[0_0_10px_#bf00ff] transition-all">
              <FaGithub size={32} />
            </a>
          </motion.div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary/60">{'<'}/{'>'}</span>{' '}
          Developed by{' '}
          <span className="neon-text-green font-bold">Poovarasu V</span>
          {' '}<span className="text-primary/60">{'<'}/{'>'}</span>
        </p>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/60 hover:text-primary transition-colors"
              data-testid="lightbox-close"
            >
              <FaTimes size={28} />
            </button>

            <button
              onClick={prevImg}
              className="absolute left-4 md:left-8 text-white/60 hover:text-primary transition-colors p-2"
              data-testid="lightbox-prev"
            >
              <FaChevronLeft size={32} />
            </button>

            <motion.div
              key={lightbox.idx}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full border border-primary/40 shadow-[0_0_40px_rgba(0,255,136,0.2)]"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.images[lightbox.idx]}
                alt={`Screenshot ${lightbox.idx + 1}`}
                className="w-full h-auto object-contain"
              />
              <div className="bg-black/80 px-4 py-2 flex items-center justify-between">
                <span className="font-mono text-primary text-sm">{lightbox.label} — Screenshot {lightbox.idx + 1} / {lightbox.images.length}</span>
                <div className="flex gap-2">
                  {lightbox.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={e => { e.stopPropagation(); setLightbox(l => ({ ...l, idx: i })); }}
                      className={`w-2 h-2 rounded-full transition-colors ${i === lightbox.idx ? 'bg-primary' : 'bg-white/20 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <button
              onClick={nextImg}
              className="absolute right-4 md:right-8 text-white/60 hover:text-primary transition-colors p-2"
              data-testid="lightbox-next"
            >
              <FaChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
