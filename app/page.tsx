"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, MapPin, ChevronRight, Terminal, ExternalLink } from "lucide-react"

interface WorkExperience {
  id: string
  company: string
  position: string
  period: string
  location: string
  team: string
  logo: string
  status: "current" | "completed"
  details: string[]
  technologies: string[]
}

interface Project {
  name: string
  period: string
  description: string
  icon: string
  technologies: string[]
  github: string
  highlights: string[]
}

export default function ProfessionalPortfolio() {
  const [selectedWork, setSelectedWork] = useState<WorkExperience | null>(null)
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
  const handleScroll = () => {
    const sections = ["intro", "work", "projects", "education"]
    const scrollPosition = window.scrollY + 100

    // special handling for edu section
    const educationElement = document.getElementById("education")
    if (educationElement) {
      const educationTop = educationElement.offsetTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      if (scrollPosition >= educationTop || 
          window.scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection("education")
        return
      }
    }

    // reg section detection for others
    for (const section of sections.slice(0, -1)) { // exclude edu
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

  const workExperience: WorkExperience[] = [
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
        "Implement scalable ETL pipelines in Databricks for large-scale data processing and actionable metrics",
        "Architect LLM workflows for advanced AI applications for acquisition and contracting",
        "Built FastAPI backend systems for deploying tools internally",
      ],
      technologies: ["Python", "SQL", "FastAPI", "React", "Databricks", "Salesforce", "RAG", "Dify"],
    },
    {
      id: "mitre-intern",
      company: "The MITRE Corporation",
      position: "Software Engineer Intern",
      period: "May 2024 - Aug 2024",
      location: "McLean, VA",
      team: "SMS, database design, AWS deployment",
      logo: "./images/mitre-logo.jpeg",
      status: "completed",
      details: [
        "Built secure SMS communication systems with end-to-end encryption for sensitive data handling",
        "Designed and optimized database schemas for high-throughput applications",
        "Deployed scalable applications on AWS infrastructure",
      ],
      technologies: ["Python", "Flask", "PostgreSql", "SQLAlchemy",  "jQuery", "AJAX", "AWS S3"],
    },
    {
      id: "gdm",
      company: "GDM Electronic & Medical",
      position: "Product & Test Engineering Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Remote",
      team: "Assembly optimization, automation solutions",
      logo: "./images/gdm-logo.png",
      status: "completed",
      details: [
        "Assessed medical device assembly processes and production data for bottlenecks",
        "Developed automated solutions to improve process efficiencies",
      ],
      technologies: ["Python", "Microsoft HyperTerminal", "SQL Server"],
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
        "Worked on particle flow algorithms for ATLAS detector data processing",
        "Implemented graph neural networks for event reconstruction (jet identification)",
        "Minimized double counting of charged particles through ML and clustering techniques",
      ],
      technologies: ["Python", "TensorFlow", "GNNs", "Physics Simulation"],
    },
  ]

  const projects: Project[] = [
    {
      name: "Construction Delivery Scheduler",
      period: "Sep 2021 - May 2023",
      description: "Scheduling software for SKANSKA construction sites with SMS integration",
      icon: "./images/skanska_logo.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Twilio"],
      github: "https://github.com/vtarapara/Delivery",
      highlights: [
        "Real-time scheduling system for construction deliveries",
        "SMS notification system for subcontractor updates and ease of access",
        "Finalist in 2022 Duke Pratt School of Engineering Design Fair",
      ],
    },
    {
      name: "Particle Flow Algorithms",
      period: "May 2022 - Sep 2022",
      description: "Graph neural networks for jet reconstruction in ATLAS detector",
      icon: "./images/particle-physics.jpg",
      technologies: ["Python", "TensorFlow", "Jupyter"],
      github: "https://github.com/vtarapara/PFlow---CERN",
      highlights: [
        "Machine learning for particle physics",
        "Graph neural network implementation",
        "ATLAS detector data processing",
      ],
    },
    {
      name: "MIPS Processor",
      period: "Sep 2023 - Dec 2023",
      description: "5-stage pipelined 32-bit MIPS processor with Whack-A-Mole game",
      icon: "./images/duke-Eclipse.png",
      technologies: ["Verilog", "Assembly", "Nexus A7 FPGA"],
      github: "https://github.com/vtarapara/Whack-A-Mole",
      highlights: [
        "Complete 5-stage pipeline implementation",
        "32-bit MIPS architecture design",
        "Custom Whack-A-Mole game integration (seperate hardware)",
      ],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6" style={{ color: '#003087' }} />
              <span className="font-bold text-lg tracking-wider" style={{ color: '#003087' }}>VIVEK TARAPARA</span>
              <span className="text-gray-500 text-xs">v2.1.7 PORTFOLIO</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {["intro", "work", "projects", "education"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium tracking-wider transition-colors ${
                    activeSection === section ? "" : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={activeSection === section ? { color: '#003087' } : {}}
                >
                  {section.toUpperCase()}
                </button>
              ))}

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:ml-4 sm:border-l sm:border-gray-200 sm:pl-4">
                <button
                  onClick={() => window.open("https://linkedin.com/in/vivek-tarapara", "_blank")}
                  className="text-gray-600 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#003087')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => window.open("https://github.com/vtarapara", "_blank")}
                  className="text-gray-600 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#003087')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
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
        <section id="intro" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Main Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#003087' }}></div>
                      <span className="text-xs tracking-wider font-medium" style={{ color: '#003087' }}>SYSTEM ONLINE</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-wider mb-4">VIVEK TARAPARA</h1>

                    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                      <p>
                        I'm a recent Duke graduate that double majored 
                        in Electrical & Computer Engineering and Computer Science. I'm passionate about creating technology that matters 
                        and building scalable systems that people actually use.
                      </p>

                      <p>
                        Currently working as a software engineer at MITRE, where I work on improving critical public sector mission systems. 
                        In my free time, I enjoy cheffing it up, gaming with my friends, playing pickleball, and spending time with my roommate's dog.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <Button
                          className="text-white font-medium shadow-md hover:shadow-lg transition-all"
                          style={{ backgroundColor: '#003087' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#002060')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#003087')}
                          onClick={() => window.open("mailto:vtara321@gmail.com")}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Me
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-white border-2 transition-all shadow-sm hover:shadow-md"
                          style={{ borderColor: '#003087', color: '#003087' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#003087'
                            e.currentTarget.style.color = 'white'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white'
                            e.currentTarget.style.color = '#003087'
                          }}
                          onClick={() => window.open("https://linkedin.com/in/vivek-tarapara", "_blank")}
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-white border-2 transition-all shadow-sm hover:shadow-md"
                          style={{ borderColor: '#003087', color: '#003087' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#003087'
                            e.currentTarget.style.color = 'white'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white'
                            e.currentTarget.style.color = '#003087'
                          }}
                          onClick={() => window.open("https://github.com/vtarapara", "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 font-mono pt-2">vtara321@gmail.com</div>
                  </div>

                  {/* Professional Profile Photo */}
                  <div className="flex-shrink-0 lg:self-start lg:mt-16">
                    <div className="relative group">
                      {/* Main photo container */}
                      <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-lg overflow-hidden border-2 bg-gray-100 shadow-lg" style={{ borderColor: '#003087' }}>
                        <img
                          src="./images/cyber-profile.jpg"
                          alt="Vivek Tarapara - Software Engineer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Professional overlay frame */}
                      <div className="absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: '#003087' }}></div>

                      {/* Subtle glow effect */}
                      <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" style={{ background: 'linear-gradient(to right, rgba(0, 48, 135, 0.2), rgba(0, 32, 96, 0.2))' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 tracking-wider">WORK EXPERIENCE</h2>
            </div>

            <div className="space-y-6">
              {workExperience.map((work) => (
                <Card
                  key={work.id}
                  className="bg-white border-gray-200 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#003087')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                  onClick={() => setSelectedWork(work)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                          <img
                            src={work.logo || "/placeholder.svg"}
                            alt={`${work.company} logo`}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 tracking-wider mb-1">{work.company}</h3>
                          <p className="font-semibold mb-3" style={{ color: '#003087' }}>{work.position}</p>
                          <p className="text-gray-600 text-sm mb-3">{work.team}</p>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                work.status === "current" ? "animate-pulse" : ""
                              }`}
                              style={{ backgroundColor: work.status === "current" ? '#003087' : '#6B7280' }}
                            ></div>
                            <span className="text-xs text-gray-500 tracking-wider font-medium">
                              {work.status === "current" ? "CURRENTLY ACTIVE" : "MISSION COMPLETED"}
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 font-mono">{work.period}</div>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
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
        <section id="projects" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 tracking-wider">PROJECTS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border-gray-200 transition-colors shadow-sm hover:shadow-md"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#003087')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded border border-gray-200 overflow-hidden">
                        <img 
                          src={project.icon} 
                          alt={`${project.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-sm font-bold text-gray-900 tracking-wider">{project.name}</CardTitle>
                        <p className="text-xs text-gray-500 font-mono">{project.period}</p>
                      </div>
                    </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{project.description}</p>

                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <div className="w-1 h-1 rounded-full mt-2" style={{ backgroundColor: '#003087' }}></div>
                          <span className="text-gray-500">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gray-100 text-gray-700 text-xs border border-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full bg-white border-2 transition-all shadow-sm hover:shadow-md"
                      style={{ borderColor: '#003087', color: '#003087' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#003087'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white'
                        e.currentTarget.style.color = '#003087'
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
        <section id="education" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 tracking-wider">EDUCATION</h2>
            </div>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src="./images/duke-logo-new.png"
                        alt="Duke University logo"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 tracking-wider mb-2">Duke University</h3>
                      <div className="space-y-1">
                        <p className="font-semibold" style={{ color: '#003087' }}>B.S.E. in Electrical and Computer Engineering</p>
                        <p className="font-semibold" style={{ color: '#003087' }}>B.S. in Computer Science</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span className="text-xs text-gray-500 tracking-wider font-medium">DUAL DEGREE PROGRAM COMPLETED</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 font-mono">Aug 2021 - Dec 2024</div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
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
          <div className="bg-white border border-gray-200 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-50 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedWork.logo || "/placeholder.svg"}
                    alt={`${selectedWork.company} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 tracking-wider">{selectedWork.company}</h2>
                  <p className="text-sm" style={{ color: '#003087' }}>{selectedWork.position}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedWork(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 tracking-wider mb-2">MISSION DETAILS</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Period:</span>
                        <span className="text-gray-900 font-mono">{selectedWork.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Location:</span>
                        <span className="text-gray-900">{selectedWork.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Status:</span>
                        <Badge
                          className={
                            selectedWork.status === "current"
                              ? "text-white"
                              : "bg-gray-100 text-gray-700"
                          }
                          style={selectedWork.status === "current" ? { backgroundColor: '#003087', color: 'white' } : {}}
                        >
                          {selectedWork.status === "current" ? "ACTIVE" : "COMPLETED"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 tracking-wider mb-2">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gray-100 text-gray-700 border border-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 tracking-wider mb-2">MISSION OBJECTIVES</h3>
                <div className="space-y-2">
                  {selectedWork.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#003087' }}></div>
                      <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#003087' }}></div>
              <span className="text-xs text-gray-500 font-medium">SYSTEM OPERATIONAL</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => window.open("https://linkedin.com/in/vivek-tarapara", "_blank")}
                className="flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-gray-700"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#003087')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button
                onClick={() => window.open("https://github.com/vtarapara", "_blank")}
                className="flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-gray-700"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#003087')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <a
                href="mailto:vivek.tarapara@duke.edu"
                className="flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-gray-700"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#003087')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            <div className="text-xs text-gray-400 font-mono">© 2025 VIVEK TARAPARA • ALL SYSTEMS SECURED</div>
          </div>
        </div>
      </footer>
    </div>
  )
}