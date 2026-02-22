export default function Skills() {
  const skillCategories = [
    {
      id: "CAP.01",
      title: "SYSTEMS_&_CORE",
      skills: [
        "Operating Systems",
        "Memory Management",
        "File Systems",
        "Data Structures & Algorithms",
        "Computer Networks",
        "System Design",
        "Performance Optimization",
        "Low-Level Programming"
      ],
    },
    {
      id: "CAP.02",
      title: "BACKEND_&_DATA",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Design",
        "PostgreSQL",
        "MySQL",
        "SQL",
        "Supabase (Auth, RLS)",
        "MongoDB",
        "Role-Based Access Control (RBAC)",
        "Backend State Management"
      ],
    },
    {
      id: "CAP.03",
      title: "AI_&_INTELLIGENT_SYSTEMS",
      skills: [
        "Retrieval-Augmented Generation (RAG)",
        "Hallucination Analysis",
        "LLM Integration (API-based)",
        "Model Context Protocol (MCP)",
        "Tool-based AI Systems",
        "Prompt Engineering",
        "AI Evaluation Pipelines",
        "NLP Evaluation"
      ],
    },
    {
      id: "CAP.04",
      title: "ML_&_DATA_SCIENCE",
      skills: [
        "Python",
        "Machine Learning Fundamentals",
        "Regression & Classification",
        "CNN (Foundational)",
        "Data Preprocessing",
        "Applied ML Experiments",
        "R Programming"
      ],
    },
    {
      id: "CAP.05",
      title: "FRONTEND_ARCH",
      skills: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Accessibility (WCAG)",
        "Component Architecture"
      ],
    },
    {
      id: "CAP.06",
      title: "INFRA_&_TOOLS",
      skills: [
        "Git & GitHub",
        "Linux",
        "Docker (Foundational)",
        "System Design",
        "Performance Profiling",
        "Production Debugging",
        "AI Integration Tooling"
      ],
    },
    {
      id: "CAP.07",
      title: "Programming LANGUAGES",
      skills: [
        "C",
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "R",
        "Rust"
      ],
    },
  ]

  return (
    <section id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* System Identifier Panel */}
      <div className="md:col-span-3 flex flex-col justify-between border border-border bg-card/50 p-4">
        <div className="space-y-1">
          <span className="font-mono text-[13px] text-primary uppercase tracking-widest block">
            [MOD.04] // MATRIX
          </span>
          <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wider">
            CAPABILITIES
          </h2>
        </div>
      </div>

      {/* Main Content Panel */}
      <div className="md:col-span-9 border border-border bg-card/50 p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                <span className="font-mono text-[12px] text-primary uppercase tracking-widest">
                  {category.id}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-md font-sans text-foreground/80 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-none"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
