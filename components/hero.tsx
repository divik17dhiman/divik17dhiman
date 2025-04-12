"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 bg-gradient-to-b from-accent to-background"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium">
              Web Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi 👋, I&apos;m <span className="text-primary">Divik Dhiman</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">A passionate web developer from India</h2>
            <p className="text-lg mb-8 max-w-lg">
              I create modern web applications with cutting-edge technologies. Currently exploring Next.js, Express.js,
              AI and ML.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://github.com/divik17dhiman" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://linkedin.com/in/divik-dhiman" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Hero illustration"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <Button variant="ghost" size="icon" asChild className="animate-bounce rounded-full">
            <Link href="#about">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
