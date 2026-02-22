export default function Experience() {
  const experiences = [
    {
      id: "LOG.01",
      role: "WEB_DEVELOPMENT_LEAD",
      company: "HACK_CLUB",
      description: "Directed technical initiatives and mentored team members on architecture decisions. Shipped production-ready web projects, enforcing code quality and scalable design patterns.",
    },
    {
      id: "LOG.02",
      role: "HACKATHON_&_ACADEMIC_ENG",
      company: "VARIOUS",
      description: "Consistently delivered end-to-end systems under strict time constraints. Focused on architectural correctness, database normalization, and system design over superficial UI polish.",
    },
    {
      id: "LOG.03",
      role: "OPEN_SOURCE_CONTRIBUTOR",
      company: "GITHUB",
      description: "Maintainer of publicly documented repositories emphasizing clean commit histories, readable code, and comprehensive technical documentation.",
    },
  ]

  return (
    <section id="experience" className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* System Identifier Panel */}
      <div className="md:col-span-3 flex flex-col justify-between border border-border bg-card/50 p-4">
        <div className="space-y-1">
          <span className="font-mono text-[13px] text-primary uppercase tracking-widest block">
            [MOD.05] // HISTORY
          </span>
          <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wider">
            EXECUTION_LOG
          </h2>
        </div>
      </div>

      {/* Main Content Panel */}
      <div className="md:col-span-9 border border-border bg-card/50 p-6 md:p-8">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline Node */}
              <div className="flex items-center justify-center w-5 h-5 rounded-none border border-primary bg-background text-primary shadow-[0_0_10px_rgba(0,229,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-1.5 h-1.5 bg-primary rounded-none"></div>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] border border-border/50 bg-background/50 p-4 hover:border-primary/50 transition-colors">
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                      {exp.id}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wider">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-sm font-sans text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
