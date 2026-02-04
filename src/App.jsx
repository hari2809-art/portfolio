import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, ExternalLink, Calendar, MapPin, Award, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react'

// --- Data ---
const DATA = {
  profile: {
    name: "Harinath Gurram",
    role: "AI & Machine Learning Engineer",
    location: "Proddatur, Andhra Pradesh",
    email: "gurramharinath28@gmail.com",
    phone: "+91 8341878036",
    linkedin: "https://linkedin.com/in/harinath-gurram-382b7b304",
    github: "https://github.com/hari2809-art",
    objective: "I’m Harinath Gurram, a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Annamacharya Institute of Technology and Sciences, with a CGPA of 8.52. I enjoy building intelligent systems and practical software solutions — from machine learning workflows to full-stack applications. My experience includes developing a JavaFX-based Student Management System integrated with MySQL and creating responsive web interfaces such as a YouTube homepage clone. Currently, I’m strengthening my data skills with NumPy and Pandas while deepening my understanding of machine learning concepts. I’m passionate about learning, problem-solving, and turning ideas into real-world applications."
  },
  skills: [
    { category: "Programming", items: ["Python", "Java"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Databases", items: ["MySQL"] },
    { category: "Tools", items: ["GitHub", "VS Code", "Microsoft Office (Excel, Word, Powerpoint)"] },
    { category: "Soft Skills", items: ["Problem Solving", "Adaptability", "Quick Learner", "Communication"] }
  ],
  projects: [
    {
      title: "Student Management System",
      tech: "Java, JavaFX, MySQL",
      brief: "Led development of a desktop CRUD application managing student records.",
      details: [
        "Led a team of 3 in developing a modular architecture.",
        "Integrated JavaFX UI with a robust MySQL backend.",
        "Practiced professional project planning and iterative development.",
        "Streamlined student record maintenance, improving team efficiency by 40%."
      ],
      blog: "The Student Management System was my first major dive into full-stack desktop application architecture. My goal was to create a seamless interface for academic administrators. I focused heavily on the bridge between the Java client and the SQL database, ensuring data integrity and fast retrieval. Leading a small team taught me how to manage code reviews and maintain a consistent design pattern across the application."
    },
    {
      title: "YouTube Homepage Clone",
      tech: "HTML, CSS",
      brief: "Developed a responsive front-end clone focusing on modern CSS layouts.",
      liveLink: "https://hari2809-art.github.io/firstwebsite/youtube.html",
      details: [
        "Utilized CSS Flexbox and Grid for complex responsive alignment.",
        "Implemented pixel-perfect hover states and interactive sidebars.",
        "Coordinated peer-review cycles for iterative UI improvements.",
        "Gained deep expertise in responsive web design principles."
      ],
      blog: "This project was an exercise in precision. Replicating a world-class UI like YouTube required deep understanding of Flexbox and Grid. I challenged myself to build it with raw CSS to master the fundamentals of layout before moving to frameworks. The result is a fully responsive homepage that mirrors the density and utility of the original platform."
    }
  ],
  education: [
    {
      degree: "B.Tech in AI & ML",
      school: "Annamacharya Institute of Technology and Sciences, Rajampet",
      period: "2022 – 2026",
      result: "CGPA: 8.52",
      icon: "🎓"
    },
    {
      degree: "Intermediate (MPC)",
      school: "MJPA PBCWR College, Doravarisatram",
      period: "2020 – 2022",
      result: "Percentage: 95.2%",
      icon: "🏫"
    },
    {
      degree: "SSC",
      school: "M.H.S 2nd High School",
      period: "2019 – 2020",
      result: "GPA: 9.7",
      icon: "✍️"
    }
  ],
  certifications: [
    { title: "JavaScript Full Course", issuer: "GeeksforGeeks", duration: "8 Weeks" },
    { title: "Advanced Data Science", issuer: "Indo-Synchronization Pvt. Ltd", duration: "2 Months" }
  ],
  languages: ["English", "Telugu", "Hindi"]
}

// --- Components ---

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="container">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </div>
  </motion.section>
)

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      className="glass"
      style={{ padding: '2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
          <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>{project.tech}</p>
        </div>
        <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>PROJECT</div>
      </div>

      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>{project.brief}</p>

      <ul style={{ marginBottom: '1.5rem' }}>
        {project.details.map((d, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--accent)' }}>•</span>
            {d}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', padding: 0 }}
        >
          {isOpen ? 'Close Blog' : 'Read Project Blog'} <ChevronRight size={16} style={{ rotate: isOpen ? 90 : 0, transition: '0.3s' }} />
        </button>

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}
          >
            View Live <ExternalLink size={14} />
          </a>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}
          >
            <p style={{ fontStyle: 'italic', color: '#444', fontSize: '0.95rem', lineHeight: 1.8 }}>{project.blog}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
}

const App = () => {
  const [navOpen, setNavOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact']

  return (
    <div>
      {/* Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5vw', zIndex: 100 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>HG.</h1>

        <div style={{ display: 'none' }} className="desktop-nav">
          {/* Handled in CSS for desktop-nav class but for now let's just use manual styles */}
        </div>

        <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.6 }}>{item}</a>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="scroll-progress"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--accent)',
            transformOrigin: '0%',
            scaleX: useScrollProgress()
          }}
        />
      </nav>

      {/* Hero Section */}
      <Section id="home">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '4px' }}>AI & ML ENGINEER</span>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 0.9, marginBottom: '2rem' }}>
            {DATA.profile.name.split(' ')[0]}<br />
            <span style={{ color: 'var(--accent)' }}>{DATA.profile.name.split(' ')[1]}</span>
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${DATA.profile.email}`} className="glass" style={{ padding: '1rem 2rem', borderRadius: '100px', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Mail size={18} /> Email
            </a>
            <a href={DATA.profile.github} target="_blank" className="glass" style={{ padding: '1rem 2rem', borderRadius: '100px', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{DATA.profile.objective}</p>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <MapPin color="var(--accent)" />
                <span>{DATA.profile.location}</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Phone color="var(--accent)" />
                <span>{DATA.profile.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Award color="var(--accent)" />
                <span>Languages: {DATA.languages.join(' • ')}</span>
              </div>
            </div>
          </div>
          <div className="glass" style={{ height: '300px', borderRadius: '24px', background: 'linear-gradient(135deg, #f0f0f0, #ffffff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Placeholder for future 3D or Image */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ opacity: 0.1, fontSize: '4rem' }}>HG</h3>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Arsenal">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {DATA.skills.map((s, i) => (
            <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--accent)' }}>{s.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {s.items.map(item => (
                  <span key={item} style={{ background: '#f5f5f5', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600 }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Core Projects">
        <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
          {DATA.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Academic Path">
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'var(--border)' }}></div>
          {DATA.education.map((e, i) => (
            <div key={i} style={{ paddingLeft: '60px', marginBottom: '3rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '0', top: '0', fontSize: '2rem' }}>{e.icon}</div>
              <h3 style={{ fontSize: '1.4rem' }}>{e.degree}</h3>
              <p style={{ fontWeight: 600, color: 'var(--accent)' }}>{e.school}</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {e.period}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><CheckCircle2 size={14} /> {e.result}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Validation">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {DATA.certifications.map((c, i) => (
            <div key={i} className="glass" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', borderRadius: '24px' }}>
              <Award size={40} color="var(--accent)" />
              <div>
                <h3 style={{ fontSize: '1.1rem' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{c.issuer} • {c.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="glass" style={{ padding: '4rem', borderRadius: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>Ready to collaborate on the next big AI innovation?</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href={DATA.profile.linkedin} target="_blank" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: '#0077b5', color: 'white', padding: '1.5rem', borderRadius: '100px' }}><Linkedin /></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>LINKEDIN</span>
            </a>
            <a href={DATA.profile.github} target="_blank" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: '#333', color: 'white', padding: '1.5rem', borderRadius: '100px' }}><Github /></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>GITHUB</span>
            </a>
            <a href={`mailto:${DATA.profile.email}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: 'var(--accent)', color: 'white', padding: '1.5rem', borderRadius: '100px' }}><Mail /></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>EMAIL</span>
            </a>
          </div>
          <p style={{ marginTop: '4rem', color: 'var(--muted)', fontSize: '0.8rem' }}>© 2026 Harinath Gurram • Built with React & Efficient Precision</p>
        </div>
      </Section>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  )
}

export default App
