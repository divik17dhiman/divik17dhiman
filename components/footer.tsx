import { Github, Linkedin, Mail, Terminal } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-16 pb-8">
      {/* System Identifier Panel */}
      <div className="md:col-span-3 flex flex-col justify-between border border-border bg-card/50 p-4">
        <div className="space-y-1">
          <span className="font-mono text-[13px] text-primary uppercase tracking-widest block">
            [SYS.TERM] // END
          </span>
          <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wider">
            COLOPHON
          </h2>
        </div>
      </div>

      {/* Main Content Panel */}
      <div className="md:col-span-9 border border-border bg-card/50 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="font-sans text-sm text-foreground/80 max-w-md space-y-2">
            <div className="flex items-center gap-2 text-primary font-mono text-xs">
              <Terminal className="w-4 h-4" />
              <span>SYSTEM_HALTED</span>
            </div>
            <p>
              Engineered by Divik Dhiman. Rendered via Next.js & Tailwind CSS. Typography: Rajdhani, IBM Plex Sans, Geist Mono.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="https://github.com/divik17dhiman" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border bg-background hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/divik-dhiman" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border bg-background hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:divik17dhiman@gmail.com" 
              className="p-2 border border-border bg-background hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
