"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "../components/ui"
import { Mail, Github, Linkedin, MapPin, ChevronRight, Terminal, ExternalLink } from "lucide-react"

export default function CyberpunkPortfolio() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "work", "projects", "education"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const workExperience = [
    {
      id: "mitre-current",
      company: "The MITRE Corporation",
      position: "Software Engineer",
      period: "Jan 2025 - Current",
      location: "McLean, VA",
      team: "ETL pipelines, LLM workflows, FastAPI backend development",
      logo: "./images/mitre-logo.jpeg",
      status: "current",
      details: [
        "Design and implement scalable ETL pipelines for large-scale data processing",
        "Architect LLM workflows for advanced AI applications",
        "Develop high-performance FastAPI backend systems",
        "Collaborate on distributed systems architecture",
      ],
      technologies: ["Python", "FastAPI", "LLM", "ETL", "Distributed Systems"],
    },
    {
      id: "mitre-intern",
      company: "The MITRE Corporation",
      position: "Software Engineer Intern",
      period: "May 2024 - Aug 2024",
      location: "McLean, VA",
      team: "Secure SMS systems, database design, AWS deployment",
      logo: "./images/mitre-logo.jpeg",
      status: "completed",
      details: [
        "Built secure SMS communication systems with end-to-end encryption",
        "Designed and optimized database schemas for high-throughput applications",
        "Deployed scalable applications on AWS infrastructure",
        "Implemented security best practices for sensitive data handling",
      ],
      technologies: ["AWS", "Database Design", "SMS Systems", "Security", "Python"],
    },
    {
      id: "gdm",
      company: "GDM Electronic & Medical",
      position: "Product & Test Engineering Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Remote",
      team: "Medical device assembly optimization, automation solutions",
      logo: "./images/gdm-logo.png",
      status: "completed",
      details: [
        "Optimized medical device assembly processes for increased efficiency",
        "Developed automation solutions for quality testing procedures",
        "Analyzed production data to identify bottlenecks and improvements",
        "Collaborated with cross-functional teams on product development",
      ],
      technologies: ["Automation", "Medical Devices", "Process Optimization", "Data Analysis"],
    },
    {
      id: "cern",
      company: "CERN",
      position: "Software Research Intern",
      period: "May 2022 - Sep 2022",
      location: "Geneva, Switzerland",
      team: "Particle flow algorithms, ATLAS detector optimization",
      logo: "./images/cern-logo-new.jpeg",
      status: "completed",
      details: [
        "Developed particle flow algorithms for ATLAS detector data processing",
        "Implemented graph neural networks for jet reconstruction",
        "Optimized detector performance through advanced algorithms",
        "Contributed to high-energy physics research at the world's largest particle accelerator",
      ],
      technologies: ["Python", "TensorFlow", "Graph Neural Networks", "Physics Simulation"],
    },
  ]

  const projects = [
    {
      name: "Construction Delivery Scheduler",
      period: "Sep 2021 - May 2023",
      description: "Scheduling software for SKANSKA construction sites with SMS integration",
      icon: "🚚",
      technologies: ["React", "Node.js", "PostgreSQL", "Twilio"],
      github: "https://github.com/vtarapara/Delivery",
      highlights: [
        "Real-time scheduling system for construction deliveries",
        "SMS notification system for delivery updates",
        "PostgreSQL database for efficient data management",
        "React frontend with responsive design",
      ],
    },
    {
      name: "Particle Flow Algorithms",
      period: "May 2022 - Sep 2022",
      description: "Graph neural networks for jet reconstruction in ATLAS detector",
      icon: "🔬",
      technologies: ["Python", "TensorFlow", "Jupyter"],
      github: "https://github.com/vtarapara/PFlow---CERN",
      highlights: [
        "Advanced machine learning for particle physics",
        "Graph neural network implementation",
        "ATLAS detector data processing",
        "Research-grade algorithm development",
      ],
    },
    {
      name: "MIPS Processor",
      period: "Sep 2023 - Dec 2023",
      description: "5-stage pipelined 32-bit MIPS processor with Whack-A-Mole game",
      icon: "💻",
      technologies: ["Verilog", "Digital Systems"],
      github: "https://github.com/vtarapara/MIPS-Processor",
      highlights: [
        "Complete 5-stage pipeline implementation",
        "32-bit MIPS architecture design",
        "Interactive Whack-A-Mole game integration",
        "Hardware description language expertise",
      ],
    },
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="nav-mobile sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-blue-electric" style={{ color: '#00D4FF' }} />
              <span className="text-blue-electric font-bold text-lg tracking-wider" style={{ color: '#00D4FF' }}>VIVEK.TARAPARA</span>
              <span className="text-neutral-500 text-xs">v2.1.7 PORTFOLIO</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {["intro", "work", "projects", "education"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium tracking-wider transition-colors ${
                    activeSection === section ? "text-blue-electric" : "text-neutral-400 hover:text-white"
                  }`}
                  style={activeSection === section ? { color: '#00D4FF' } : {}}
                >
                  {section.toUpperCase()}
                </button>
              ))}

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:ml-4 sm:border-l sm:border-neutral-700 sm:pl-4">
                <button
                  onClick={() => window.open("https://linkedin.com/in/vivek-tarapara", "_blank")}
                  className="text-neutral-400 transition-colors hover:text-blue-electric"
                  style={{ ':hover': { color: '#00D4FF' } }}
                  onMouseEnter={(e) => e.target.style.color = '#00D4FF'}
                  onMouseLeave={(e) => e.target.style.color = ''}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => window.open("https://github.com/vtarapara", "_blank")}
                  className="text-neutral-400 transition-colors hover:text-blue-electric"
                  onMouseEnter={(e) => e.target.style.color = '#00D4FF'}
                  onMouseLeave={(e) => e.target.style.color = ''}
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Intro Section */}
        <section id="intro" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-neutral-900 border-neutral-700">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Main Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#00D4FF' }}></div>
                      <span className="text-xs tracking-wider" style={{ color: '#00D4FF' }}>SYSTEM ONLINE</span>
                    </div>

                    <h1 className="hero-title font-bold text-white tracking-wider mb-4">VIVEK TARAPARA</h1>

                    <div className="text-lg text-neutral-300 leading-relaxed space-y-4">
                      <p>
                        I'm a recent <span className="font-semibold" style={{ color: '#00D4FF' }}>Duke graduate</span> with dual degrees in
                        <span className="text-white"> Electrical & Computer Engineering</span> and
                        <span className="text-white"> Computer Science</span>. I'm passionate about creating <span style={{ color: '#00D4FF' }}>technology that matters</span>
                        , building <span style={{ color: '#00D4FF' }}>scalable systems</span> that people actually use
                        , and applying <span style={{ color: '#00D4FF' }}>machine learning</span> to solve real-world problems.
                      </p>

                      <p>
                        Currently working as a <span className="text-white font-semibold">Software Engineer</span> at
                        <span style={{ color: '#00D4FF' }}> MITRE Corporation</span>, where I design
                        <span className="text-white"> ETL pipelines</span> and architect
                        <span className="text-white"> LLM workflows</span>. In my free time, I enjoy <span className="text-white">cheffing it up</span>,
                        <span className="text-white"> gaming with my homies</span>,
                        <span className="text-white"> hooping</span>,<span className="text-white"> and spending
                         time with dogspickleball</span>
                      </p>

                      <p>
                        In my free time, I enjoy <span className="text-white">software product management</span>,
                        <span className="text-white"> entrepreneurship</span>,
                        <span className="text-white"> basketball</span>,<span className="text-white"> pickleball</span>,
                        and spending time with dogs (big and small).
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <Button
                          className="text-white btn-hover-glow"
                          style={{ backgroundColor: '#00D4FF' }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#0099CC'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#00D4FF'}
                          onClick={() => window.open("mailto:vivek.tarapara@duke.edu")}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Me
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-transparent border-2 transition-all"
                          style={{ borderColor: '#00D4FF50', color: '#00D4FF' }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00D4FF10'
                            e.target.style.color = '#00D4FF'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent'
                            e.target.style.color = '#00D4FF'
                          }}
                          onClick={() => window.open("https://linkedin.com/in/vivek-tarapara", "_blank")}
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-transparent border-2 transition-all"
                          style={{ borderColor: '#00D4FF50', color: '#00D4FF' }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00D4FF10'
                            e.target.style.color = '#00D4FF'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent'
                            e.target.style.color = '#00D4FF'
                          }}
                          onClick={() => window.open("https://github.com/vtarapara", "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </div>
                    </div>

                    <div className="text-sm text-neutral-400 font-mono pt-2">vivek.tarapara@duke.edu</div>
                  </div>

                  {/* Professional Profile Photo */}
                  <div className="flex-shrink-0 lg:self-start lg:mt-16">
                    <div className="relative group">
                      {/* Main photo container */}
                      <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-lg overflow-hidden border-2 bg-neutral-800" style={{ borderColor: '#00D4FF30' }}>
                        <img
                          src="./images/cyber-profile.png"
                          alt="Vivek Tarapara - Software Engineer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Professional overlay frame */}
                      <div className="absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: '#00D4FF50' }}></div>

                      {/* Subtle glow effect */}
                      <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" style={{ background: 'linear-gradient(to right, rgba(0, 212, 255, 0.2), rgba(0, 153, 204, 0.2))' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="section-title font-bold text-white tracking-wider">WORK EXPERIENCE</h2>
            </div>

            <div className="space-y-6">
              {workExperience.map((work) => (
                <Card
                  key={work.id}
                  className="card-hover bg-neutral-900 border-neutral-700 transition-all duration-200 cursor-pointer hover:border-blue-electric"
                  style={{ ':hover': { borderColor: '#00D4FF50' } }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00D4FF50'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                  onClick={() => setSelectedWork(work)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center overflow-hidden">
                          <img
                            src={work.logo || "/placeholder.svg"}
                            alt={`${work.company} logo`}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white tracking-wider mb-1">{work.company}</h3>
                          <p className="font-semibold mb-3" style={{ color: '#00D4FF' }}>{work.position}</p>
                          <p className="text-neutral-300 text-sm mb-3">{work.team}</p>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                work.status === "current" ? "animate-pulse" : ""
                              }`}
                              style={{ backgroundColor: work.status === "current" ? '#00D4FF' : '#737373' }}
                            ></div>
                            <span className="text-xs text-neutral-400 tracking-wider">
                              {work.status === "current" ? "CURRENTLY ACTIVE" : "MISSION COMPLETED"}
                            </span>
                            <ChevronRight className="w-4 h-4 text-neutral-500 ml-auto" />
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-neutral-400 font-mono">{work.period}</div>
                        <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                          <MapPin className="w-3 h-3" />
                          {work.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-neutral-950">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white tracking-wider">PROJECTS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-neutral-900 border-neutral-700 transition-colors hover:border-blue-electric"
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00D4FF50'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{project.icon}</div>
                        <div>
                          <CardTitle className="text-sm font-bold text-white tracking-wider">{project.name}</CardTitle>
                          <p className="text-xs text-neutral-400 font-mono">{project.period}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-neutral-300">{project.description}</p>

                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <div className="w-1 h-1 rounded-full mt-2" style={{ backgroundColor: '#00D4FF' }}></div>
                          <span className="text-neutral-400">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-neutral-800 text-neutral-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-2 transition-all"
                      style={{ borderColor: '#00D4FF50', color: '#00D4FF' }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#00D4FF10'
                        e.target.style.color = '#00D4FF'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = '#00D4FF'
                      }}
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white tracking-wider">EDUCATION</h2>
            </div>

            <Card className="bg-neutral-900 border-neutral-700">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center overflow-hidden">
                      <img
                        src="./images/duke-logo-new.png"
                        alt="Duke University logo"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wider mb-2">Duke University</h3>
                      <div className="space-y-1">
                        <p className="font-semibold" style={{ color: '#00D4FF' }}>B.S.E. in Electrical and Computer Engineering</p>
                        <p className="font-semibold" style={{ color: '#00D4FF' }}>B.S. in Computer Science</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-xs text-neutral-400 tracking-wider">DUAL DEGREE PROGRAM COMPLETED</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-neutral-400 font-mono">Aug 2021 - Dec 2024</div>
                    <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      Durham, NC
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Work Details Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedWork.logo || "/placeholder.svg"}
                    alt={`${selectedWork.company} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-wider">{selectedWork.company}</h2>
                  <p className="text-sm" style={{ color: '#00D4FF' }}>{selectedWork.position}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedWork(null)}
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">MISSION DETAILS</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Period:</span>
                        <span className="text-white font-mono">{selectedWork.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Location:</span>
                        <span className="text-white">{selectedWork.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Status:</span>
                        <Badge
                          className={
                            selectedWork.status === "current"
                              ? "text-white"
                              : "bg-white/20 text-white"
                          }
                          style={selectedWork.status === "current" ? { backgroundColor: '#00D4FF20', color: '#00D4FF' } : {}}
                        >
                          {selectedWork.status === "current" ? "ACTIVE" : "COMPLETED"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.technologies.map((tech) => (
                        <Badge key={tech} className="bg-neutral-800 text-neutral-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">MISSION OBJECTIVES</h3>
                <div className="space-y-2">
                  {selectedWork.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00D4FF' }}></div>
                      <span className="text-neutral-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-700 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00D4FF' }}></div>
              <span className="text-xs text-neutral-400">SYSTEM OPERATIONAL</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => window.open("https://linkedin.com/in/vivek-tarapara", "_blank")}
                className="flex items-center gap-2 text-xs text-neutral-400 transition-colors hover:text-blue-electric"
                onMouseEnter={(e) => e.target.style.color = '#00D4FF'}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button
                onClick={() => window.open("https://github.com/vtarapara", "_blank")}
                className="flex items-center gap-2 text-xs text-neutral-400 transition-colors hover:text-blue-electric"
                onMouseEnter={(e) => e.target.style.color = '#00D4FF'}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <a
                href="mailto:vivek.tarapara@duke.edu"
                className="flex items-center gap-2 text-xs text-neutral-400 transition-colors hover:text-blue-electric"
                onMouseEnter={(e) => e.target.style.color = '#00D4FF'}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            <div className="text-xs text-neutral-500 font-mono">© 2025 VIVEK TARAPARA • ALL SYSTEMS SECURED</div>
          </div>
        </div>
      </footer>
    </div>
  )
}