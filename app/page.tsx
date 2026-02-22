import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="container py-12 md:py-24 space-y-12 md:space-y-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </main>
  )
}
