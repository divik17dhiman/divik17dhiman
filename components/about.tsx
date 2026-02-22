export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* System Identifier Panel */}
      <div className="md:col-span-3 flex flex-col justify-between border border-border bg-card/50 p-4">
        <div className="space-y-1">
          <span className="font-mono text-[13px] text-primary uppercase tracking-widest block">
            [MOD.02] // DIRECTIVE
          </span>
          <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wider">
            CORE_OBJECTIVES
          </h2>
        </div>
      </div>

      {/* Main Content Panel */}
      <div className="md:col-span-9 border border-border bg-card/50 p-6 md:p-8">
        <div className="text-sm md:text-base font-sans text-foreground/80 max-w-3xl space-y-6">
          <div className="flex gap-4 items-start">
            <span className="font-mono text-primary mt-1">{">"}</span>
            <p className="leading-relaxed">
              I am a software developer with experience in backend, full-stack, and systems-oriented projects. I work with databases, APIs, MCP-style backends, and AI systems, with a focus on building software that is reliable, efficient, and easy to reason about.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-mono text-primary mt-1">{">"}</span>
            <p className="leading-relaxed">
              I design backend APIs and services with attention to performance, data modeling, and scalability. I am interested in working on systems where architectural choices directly impact correctness, efficiency, and long-term maintainability.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="font-mono text-primary mt-1">{">"}</span>
            <p className="leading-relaxed">
              Currently seeking roles that demand rigorous engineering standards and complex problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
