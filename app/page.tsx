"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, MapPin, Code, Brain, Target, ChevronRight, Terminal } from "lucide-react"

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
      logo: "MIT",
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
      logo: "MIT",
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
      logo: "GDM",
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
      logo: "CRN",
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
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-bold text-lg tracking-wider">VIVEK.TARAPARA</span>
              <span className="text-neutral-500 text-xs">v2.1.7 PORTFOLIO</span>
            </div>
            <div className="flex items-center gap-6">
              {["intro", "work", "projects", "education"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium tracking-wider transition-colors ${
                    activeSection === section ? "text-orange-500" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Intro Section */}
        <section id="intro" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-neutral-900 border-neutral-700">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-orange-500 tracking-wider">SYSTEM ONLINE</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-4">VIVEK TARAPARA</h1>

                  <div className="text-lg text-neutral-300 leading-relaxed space-y-4">
                    <p>
                      I'm a <span className="text-orange-500 font-semibold">Duke graduate</span> with dual degrees in
                      <span className="text-white"> Electrical & Computer Engineering</span> and
                      <span className="text-white"> Computer Science</span>. I'm passionate about building
                      <span className="text-orange-500"> scalable systems</span>,
                      <span className="text-orange-500"> machine learning applications</span>, and solving
                      <span className="text-orange-500"> complex algorithmic problems</span>.
                    </p>

                    <p>
                      Currently working as a <span className="text-white font-semibold">Software Engineer</span> at
                      <span className="text-orange-500"> MITRE Corporation</span>, where I design
                      <span className="text-white"> ETL pipelines</span> and architect
                      <span className="text-white"> LLM workflows</span>. I have experience with
                      <a href="#" className="text-orange-500 hover:text-orange-400 underline">
                        distributed systems
                      </a>
                      ,
                      <a href="#" className="text-orange-500 hover:text-orange-400 underline">
                        {" "}
                        data engineering
                      </a>
                      , and
                      <a href="#" className="text-orange-500 hover:text-orange-400 underline">
                        {" "}
                        ML/AI applications
                      </a>
                      .
                    </p>

                    <p>
                      In my free time, I enjoy <span className="text-white">software product management</span>,
                      <span className="text-white"> entrepreneurship</span>,
                      <span className="text-white"> basketball</span>,<span className="text-white"> pickleball</span>,
                      and spending time with dogs (big and small).
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6">
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => window.open("mailto:vivek.tarapara@duke.edu")}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </Button>
                    <div className="text-sm text-neutral-400 font-mono">vivek.tarapara@duke.edu</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Target className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-white tracking-wider">WORK EXPERIENCE</h2>
            </div>

            <div className="space-y-6">
              {workExperience.map((work) => (
                <Card
                  key={work.id}
                  className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedWork(work)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center">
                          <span className="text-orange-500 font-bold text-sm">{work.logo}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-bold text-white tracking-wider">{work.company}</h3>
                              <p className="text-orange-500 font-semibold">{work.position}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-neutral-400 font-mono">{work.period}</div>
                              <div className="flex items-center gap-1 text-xs text-neutral-500">
                                <MapPin className="w-3 h-3" />
                                {work.location}
                              </div>
                            </div>
                          </div>
                          <p className="text-neutral-300 text-sm mb-3">{work.team}</p>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                work.status === "current" ? "bg-orange-500 animate-pulse" : "bg-neutral-500"
                              }`}
                            ></div>
                            <span className="text-xs text-neutral-400 tracking-wider">
                              {work.status === "current" ? "CURRENTLY ACTIVE" : "MISSION COMPLETED"}
                            </span>
                            <ChevronRight className="w-4 h-4 text-neutral-500 ml-auto" />
                          </div>
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
            <div className="flex items-center gap-4 mb-12">
              <Code className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-white tracking-wider">PROJECTS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors"
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
                          <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
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
                      className="w-full border-orange-500/50 text-orange-500 hover:bg-orange-500/10 bg-transparent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source
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
            <div className="flex items-center gap-4 mb-12">
              <Brain className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-white tracking-wider">EDUCATION</h2>
            </div>

            <Card className="bg-neutral-900 border-neutral-700">
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center">
                      <span className="text-orange-500 font-bold">DUKE</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wider mb-2">Duke University</h3>
                      <div className="space-y-1">
                        <p className="text-orange-500 font-semibold">B.S.E. in Electrical and Computer Engineering</p>
                        <p className="text-orange-500 font-semibold">B.S. in Computer Science</p>
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
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-sm">{selectedWork.logo}</span>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white tracking-wider">{selectedWork.company}</CardTitle>
                  <p className="text-sm text-orange-500">{selectedWork.position}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedWork(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
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
                              ? "bg-orange-500/20 text-orange-500"
                              : "bg-white/20 text-white"
                          }
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span className="text-neutral-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-700 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-neutral-400">SYSTEM OPERATIONAL</span>
            </div>
            <div className="text-xs text-neutral-500 font-mono">© 2025 VIVEK TARAPARA • ALL SYSTEMS SECURED</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
