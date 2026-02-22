import { ArrowRight, Github, FileText, Terminal } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* System Identifier Panel */}
      <div className="md:col-span-3 flex flex-col justify-between border border-border bg-card/50 p-4">
        <div className="space-y-1">
          <span className="font-mono text-[13px] text-primary uppercase tracking-widest block">
            [MOD.01] // IDENTITY
          </span>
          <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wider">
            OPERATOR_PROFILE
          </h2>
        </div>
        
        <div className="hidden md:flex flex-col gap-2 mt-auto pt-8">
          <span className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest border-b border-border/50 pb-1 mb-1">
            UPLINK_NODES
          </span>
          <Link href="https://github.com/divik17dhiman" target="_blank" className="text-md font-mono text-foreground hover:text-primary transition-colors flex items-center gap-2">
            <span className="text-primary">{">"}</span> GITHUB
          </Link>
          <Link href="https://drive.google.com/file/d/1Gb-tkDklakbERnCjhoJgEhp2h2Bo7byF/view?usp=sharing" target="_blank" className="text-md font-mono text-foreground hover:text-primary transition-colors flex items-center gap-2">
            <span className="text-primary">{">"}</span> RESUME
          </Link>
        </div>
      </div>

      {/* Core Telemetry Panel */}
      <div className="md:col-span-9 border border-border bg-card/50 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative corner brackets (CSS only, no images) */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50"></div>

        <div className="space-y-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-widest">
              <Terminal className="w-4 h-4 text-primary" />
              <span>SYS.USER:</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground uppercase leading-none">
              DIVIK<br />DHIMAN
            </h1>
          </div>
          
          <div className="border-l-2 border-primary/30 pl-4 py-1">
            <p className="text-md lg:text-base font-sans text-foreground/80 max-w-2xl leading-relaxed">
              Focused on building reliable web systems and low-level software. I bridge modern full-stack development with systems-level understanding, prioritizing correctness, performance, and clear architecture over unnecessary complexity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest">SYS.STATUS</span>
              <span className="font-mono text-sm text-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-none"></span> ONLINE WHEN YOU NEED
              </span>
            </div>
            <div className="flex flex-col gap-1 border-l border-border/50 pl-4">
              <span className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest">PRIMARY_DIRECTIVE</span>
              <span className="font-mono text-sm text-foreground uppercase tracking-wider">
                SOFTWARE ENGINEER
              </span>
            </div>
            <div className="flex flex-col gap-1 border-l border-border/50 pl-4">
              <span className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest">LOC</span>
              <span className="font-mono text-sm text-foreground uppercase tracking-wider">
                GLOBAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
