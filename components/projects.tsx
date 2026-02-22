import { ExternalLink, Github, Database, Server, Cpu } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: "SYS.01",
      title: "LLM Hallucination Analysis / RAG Evaluation System",
      problem:
        "Large Language Models frequently generate confident but incorrect responses when operating without grounded context, limiting reliability in production systems.",
      architecture:
        "Designed and executed a controlled evaluation pipeline comparing direct prompting vs Retrieval-Augmented Generation (RAG) across 500+ queries. Implemented dense, BM25, and hybrid retrieval strategies with ablation studies on chunking methods and top-k selection. Built a reproducible framework to measure hallucination rate and answer faithfulness.",
      impact:
        "Achieved 27% reduction in hallucination rate using optimized hybrid retrieval. Established a structured evaluation methodology for measuring LLM reliability and grounding effectiveness.",
      tech: [
        "Python",
        "RAG",
        "FAISS / Chroma",
        "BM25",
        "LLM APIs",
        "NLP Evaluation"
      ],
      github: "https://github.com/divik17dhiman",
      icon: <Cpu className="w-5 h-5 text-primary" />
    },
    {
      id: "SYS.02",
      title: "AI Tooling & MCP Server Suite",
      problem:
        "AI systems require structured, validated access to real-world data sources to enable reliable reasoning and cross-domain querying.",
      architecture:
        "Developed a suite of Model Context Protocol (MCP) servers enabling AI interaction with external systems including GitHub, Reddit, personal finance data, and a predictive ML model. Designed standardized tool schemas, secure REST API integrations, validated data pipelines, and robust input validation to support extensible AI workflows.",
      impact:
        "Enabled reliable AI-driven querying and analytics across heterogeneous domains. Built reusable MCP infrastructure to support structured, tool-based AI reasoning.",
      tech: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "Model Context Protocol (MCP)",
        "REST APIs",
        "AI Integration"
      ],
      github: "https://github.com/divik17dhiman",
      icon: <Server className="w-5 h-5 text-primary" />
    },
    {
      id: "SYS.03",
      title: "HackClub Recruitment Portal",
      problem:
        "Manual recruitment workflows do not scale efficiently and lead to inconsistent evaluation, processing delays, and administrative overhead.",
      architecture:
        "Led end-to-end development of a production recruitment platform handling 800–1000+ applicants per cycle. Designed role-based access control, status tracking workflows, interview scheduling pipelines, and recruiter analytics dashboards. Architected the system using Supabase (PostgreSQL, Auth, RLS) with Next.js and deployed via Vercel.",
      impact:
        "Reduced recruitment processing time by approximately 70% while maintaining 99.9% uptime. Improved evaluation consistency and decision transparency across recruitment cycles.",
      tech: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Role-Based Access Control",
        "Tailwind CSS",
        "Vercel"
      ],
      github: "https://github.com/divik17dhiman",
      demo: "https://join.hackclubvit.xyz",
      icon: <Database className="w-5 h-5 text-primary" />
    }
  ]

  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* System Identifier Panel */}
      <div className="md:col-span-3 flex flex-col justify-between border border-border bg-card/50 p-4">
        <div className="space-y-1">
          <span className="font-mono text-[13px] text-primary uppercase tracking-widest block">
            [MOD.03] // DEPLOYMENTS
          </span>
          <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wider">
            ARCHITECTURES
          </h2>
        </div>
      </div>

      {/* Main Content Panel */}
      <div className="md:col-span-9 space-y-4">
        {projects.map((project) => (
          <article key={project.id} className="border border-border bg-card/50 p-6 flex flex-col gap-6 relative group">
            {/* Hover indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <header className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border/50 pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-border bg-background">
                  {project.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] text-primary uppercase tracking-widest px-1.5 py-0.5 border border-primary/30 bg-primary/10">
                      {project.id}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground tracking-tight uppercase">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end max-w-[350px]">
                {project.tech.map((tech) => (
                  <span key={tech} className="font-mono text-[13px] text-muted-foreground uppercase tracking-wider border border-border/50 px-2 py-1 bg-background/50">
                    {tech}
                  </span>
                ))}
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-foreground/80">
              <div className="space-y-2">
                <h4 className="font-mono text-[13px] text-primary uppercase tracking-widest border-b border-border/30 pb-1">
                  PROBLEM_SPACE
                </h4>
                <p className="leading-relaxed">{project.problem}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-[13px] text-primary uppercase tracking-widest border-b border-border/30 pb-1">
                  ARCHITECTURE
                </h4>
                <p className="leading-relaxed">{project.architecture}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-[13px] text-primary uppercase tracking-widest border-b border-border/30 pb-1">
                  IMPACT_METRICS
                </h4>
                <p className="leading-relaxed">{project.impact}</p>
              </div>
            </div>

            <footer className="flex gap-4 pt-4 border-t border-border/50">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary mr-2">{">"}</span>
                  INITIATE_SOURCE_VIEW
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary mr-2">{">"}</span>
                  ACCESS_LIVE_ENV
                </Link>
              )}
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
