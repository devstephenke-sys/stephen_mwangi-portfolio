import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  ArrowUpRight,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Database,
  BookOpen,
  BrainCircuit,
  Layout,
  Home as HomeIcon,
  User,
  Wrench,
  Briefcase,
  Send
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Shared Components ---

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-brand-text-dim max-w-2xl font-light">{subtitle}</p>}
  </div>
);

const BentoCard = ({ 
  children, 
  className, 
  title, 
  subtitle,
  icon: Icon
}: { 
  children?: React.ReactNode; 
  className?: string; 
  title?: string; 
  subtitle?: string;
  icon?: any;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={cn(
      "glass glass-hover p-6 flex flex-col gap-4 relative group",
      className
    )}
  >
    {(title || Icon) && (
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-brand-text-dim" />}
          {title && <h3 className="text-xs font-mono uppercase tracking-widest text-brand-text-dim">{title}</h3>}
        </div>
        {subtitle && <span className="text-[10px] font-mono text-brand-text-dim/50 uppercase">{subtitle}</span>}
      </div>
    )}
    {children}
  </motion.div>
);

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  link,
  image 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  link: string;
  image?: string;
}) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="glass glass-hover p-4 flex flex-col gap-4 group/project h-full transition-all"
  >
    <div className="aspect-video rounded-xl bg-white/5 overflow-hidden relative">
      <img 
        src={image || `https://picsum.photos/seed/${title}/800/450`} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/project:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/project:opacity-100 transition-opacity flex items-center justify-center">
        <ExternalLink className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-lg group-hover/project:text-white/90 transition-colors">{title}</h4>
        <ArrowUpRight className="w-4 h-4 text-brand-text-dim group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5 transition-transform" />
      </div>
      <p className="text-sm text-brand-text-dim line-clamp-2 mt-1 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

// --- Pages ---

const Home = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col gap-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-blue-400 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-tighter">Learning something new</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-tighter">Open for consultant roles</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-tight leading-none">Stephen <br /> Njuguna</h1>
            <p className="text-2xl text-brand-text-dim max-w-2xl font-light leading-relaxed">
              Data Scientist & eLearning Developer. Bridging the gap between <span className="text-white">complex data</span> and <span className="text-white">interactive learning</span>.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard title="At a Glance" icon={Sparkles} className="h-full">
            <div className="space-y-4">
              <p className="text-lg text-brand-text-dim leading-relaxed">
                Computer Scientist from Rongo University. I specialize in building high-performance eLearning modules and data-driven analytics platforms.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-text-dim bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                  <MapPin className="w-3 h-3" /> Nairobi, Kenya
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-text-dim bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                  <Clock className="w-3 h-3" /> {time.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </BentoCard>
          <div className="grid grid-cols-2 gap-6">
            <BentoCard className="flex items-center justify-center text-center">
              <div>
                <div className="text-5xl font-serif italic mb-1 text-blue-400">4+</div>
                <div className="text-[10px] font-mono text-brand-text-dim uppercase tracking-widest">Years Exp</div>
              </div>
            </BentoCard>
            <BentoCard className="flex items-center justify-center text-center">
              <div>
                <div className="text-5xl font-serif italic mb-1 text-blue-400">15+</div>
                <div className="text-[10px] font-mono text-brand-text-dim uppercase tracking-widest">Projects</div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const About = () => (
  <PageWrapper>
    <SectionTitle 
      title="About & Experience" 
      subtitle="A journey through computer science, data analysis, and digital education."
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <BentoCard title="My Story" icon={User}>
          <div className="space-y-4 text-lg text-brand-text-dim leading-relaxed">
            <p>
              I am a dedicated Computer Scientist with a Bachelor's degree from Rongo University (2019-2023). My career is built on the foundation of continuous learning and a passion for solving complex problems through technology.
            </p>
            <p>
              I've transitioned from data entry to becoming a specialized eLearning Developer and Data Analyst. I believe that data is only as powerful as the insights we can teach others to derive from it.
            </p>
          </div>
        </BentoCard>

        <BentoCard title="Work Experience" icon={Briefcase}>
          <div className="space-y-8">
            {[
              {
                role: "eLearning Officer",
                company: "Don Bosco Tech Africa",
                period: "Jan 2026 - Present",
                desc: "Managing LMS platforms and developing technical vocational training modules. Leading the digital transformation of vocational education across Africa.",
                current: true
              },
              {
                role: "eLearning Intern",
                company: "Don Bosco Tech Africa",
                period: "Jan 2025 - Dec 2025",
                desc: "Focused on interactive module design and data-driven content evaluation. Developed standards-aligned digital learning experiences."
              },
              {
                role: "Data Entry Specialist",
                company: "Mwangaza",
                period: "2023 - 2024",
                desc: "Managed comprehensive data entry, cleaning, and storage for organizational systems."
              }
            ].map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10">
                <div className={cn(
                  "absolute left-[-5px] top-1 w-2 h-2 rounded-full",
                  exp.current ? "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" : "bg-white/20"
                )} />
                <h4 className="text-xl font-medium text-white">{exp.role}</h4>
                <p className="text-sm text-blue-400 font-mono mb-2">{exp.company} • {exp.period}</p>
                <p className="text-brand-text-dim leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>

      <div className="space-y-8">
        <BentoCard title="Education" icon={Terminal}>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-white">B.Sc. Computer Science</h4>
              <p className="text-sm text-brand-text-dim">Rongo University</p>
              <p className="text-xs text-blue-400 font-mono">2019 - 2023</p>
            </div>
            <div className="h-px bg-white/5" />
            <div>
              <h4 className="font-medium text-white">KCSE</h4>
              <p className="text-sm text-brand-text-dim">Kabazi High School</p>
              <p className="text-xs text-blue-400 font-mono">2015 - 2018</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="Certifications" icon={Sparkles}>
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <h4 className="text-sm font-medium text-blue-400">IBM Data Analysis Professional</h4>
              <p className="text-[10px] text-brand-text-dim uppercase tracking-wider">IBM • 2024</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-sm font-medium">Computer Packages Certificate</h4>
              <p className="text-[10px] text-brand-text-dim uppercase tracking-wider">Awake Computers</p>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>
  </PageWrapper>
);

const Skills = () => (
  <PageWrapper>
    <SectionTitle 
      title="Skills & Expertise" 
      subtitle="A balanced toolkit of eLearning development and data science capabilities."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <BentoCard title="eLearning Development" icon={BookOpen}>
        <div className="space-y-6">
          {[
            { name: "Articulate Storyline", level: 95 },
            { name: "Articulate Rise", level: 90 },
            { name: "Moodle / LearnDash", level: 85 },
            { name: "Instructional Design", level: 80 },
            { name: "AI Tutor Integration", level: 75 },
            { name: "Zoho Enterprise", level: 70 }
          ].map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-400"
                />
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard title="Data Science & AI" icon={BrainCircuit}>
        <div className="space-y-6">
          {[
            { name: "Python (Pandas/Scipy)", level: 90 },
            { name: "Machine Learning", level: 85 },
            { name: "Fast API", level: 80 },
            { name: "Data Visualization (Tableau)", level: 85 },
            { name: "Neural Networks / LLMs", level: 65 },
            { name: "Data Cleaning", level: 95 }
          ].map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-400"
                />
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard title="Technical Languages" icon={Code2} className="md:col-span-2">
        <div className="flex flex-wrap gap-4">
          {["Python", "PHP", "Java", "C/C++", "HTML", "CSS", "JavaScript", "SQL"].map(lang => (
            <div key={lang} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-lg font-medium hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-400 transition-all cursor-default">
              {lang}
            </div>
          ))}
        </div>
      </BentoCard>
    </div>
  </PageWrapper>
);

const Projects = () => (
  <PageWrapper>
    <SectionTitle 
      title="Featured Projects" 
      subtitle="A collection of work spanning interactive learning and predictive analytics."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard 
        title="Festo: Household Electrician"
        description="Developed a comprehensive learning path for household electricians, focusing on technical and vocational education standards."
        tags={["Articulate", "LMS", "Vocational Training", "Instructional Design"]}
        link="https://lx.festo.com/en/learning-paths/2684"
      />
      <ProjectCard 
        title="Plant Disease Analysis"
        description="A machine learning model and Fast API implementation for predicting plant diseases from image data. Built as part of an IBM assignment."
        tags={["Python", "Fast API", "Machine Learning", "Data Science"]}
        link="https://github.com/devstephenke-sys/Disease-Prediction-Model-IBM-Assignment/blob/main/PlantDiseaseAnalysis.ipynb"
      />
      <ProjectCard 
        title="DBTA Survey Analysis"
        description="Interactive Streamlit dashboard for analyzing survey data and monitoring learning experiences across DBTA platforms."
        tags={["Streamlit", "Python", "Data Visualization", "Pandas"]}
        link="https://dbtagp2jsosurveyanalysis-2huah8psohhxgibwp4dprm.streamlit.app/"
      />
      <ProjectCard 
        title="AI Tutor Implementation"
        description="Integrating AI-driven tutoring systems into the Don Bosco Tech Africa LMS to enhance student support."
        tags={["AI", "LMS", "Python", "Education Tech"]}
        link="https://github.com/devstephenke-sys"
      />
      <ProjectCard 
        title="Basic Python Training"
        description="A comprehensive repository for learning and training on Python fundamentals, covering data types, control structures, and basic algorithms."
        tags={["Python", "Training", "Basics", "Education"]}
        link="https://github.com/devstephenke-sys/Basic-Python"
      />
    </div>
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper>
    <SectionTitle 
      title="Get in Touch" 
      subtitle="Let's discuss how I can help you with your next data or eLearning project."
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <BentoCard title="Contact Information" icon={Mail} className="bg-blue-500/5 border-blue-500/20">
          <div className="space-y-6">
            <a href="mailto:devstephen.ke@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Email</p>
                <p className="text-lg text-white">devstephen.ke@gmail.com</p>
              </div>
            </a>
            <a href="tel:0745534836" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Phone</p>
                <p className="text-lg text-white">0745 534 836</p>
              </div>
            </a>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Location</p>
                <p className="text-lg text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="Social Profiles" icon={Globe}>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/devstephenke-sys", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/stephen-mwangi-bb39713a8/", label: "LinkedIn" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass flex flex-col items-center justify-center gap-3 py-6 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all group"
              >
                <social.icon className="w-6 h-6 text-brand-text-dim group-hover:text-blue-400 transition-colors" />
                <span className="text-xs font-mono text-brand-text-dim group-hover:text-white">{social.label}</span>
              </a>
            ))}
          </div>
        </BentoCard>
      </div>

      <BentoCard title="Send a Message" icon={Send}>
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-text-dim uppercase">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-text-dim uppercase">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-brand-text-dim uppercase">Subject</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white" placeholder="Project Inquiry" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-brand-text-dim uppercase">Message</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white min-h-[150px]" placeholder="How can I help you?" />
          </div>
          <button className="w-full py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </BentoCard>
    </div>
  </PageWrapper>
);

// --- Layout ---

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "About", path: "/about", icon: User },
    { name: "Skills", path: "/skills", icon: Wrench },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 glass backdrop-blur-md flex items-center gap-2 shadow-2xl border-white/10">
      {navItems.map(item => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.name} 
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-widest transition-all",
              isActive ? "bg-blue-500 text-white" : "text-brand-text-dim hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden md:inline">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg text-white selection:bg-blue-500/30 selection:text-white pt-32 pb-20">
        <Navigation />
        <main className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-text-dim text-[10px] font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Stephen Njuguna Mwangi</p>
          <div className="flex gap-8">
            <a href="https://github.com/devstephenke-sys" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/stephen-mwangi-bb39713a8/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}
