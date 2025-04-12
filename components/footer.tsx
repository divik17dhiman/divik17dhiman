import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              Divik<span className="text-primary">Dhiman</span>
            </Link>
            <p className="text-muted-foreground mt-2">A passionate web developer from India</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/divik17dhiman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/in/divik-dhiman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </Link>
            <Link
              href="mailto:divik17dhiman@gmail.com"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary" />
            </Link>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Divik Dhiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
