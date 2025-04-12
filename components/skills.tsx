"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "JavaScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "C++", category: "language" },
  { name: "C", category: "language" },
  { name: "MongoDB", category: "database" },
  { name: "Git", category: "tool" },
  { name: "Django", category: "backend" },
  { name: "Android", category: "mobile" },
  { name: "Unreal Engine", category: "game" },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-accent/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies I Work With</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="text-center">
                <h3 className="font-medium mb-2">{skill.name}</h3>
                <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                  {skill.category}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-card rounded-xl border border-primary/10 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="px-3 py-1 text-sm bg-primary/90 hover:bg-primary">Next.js</Badge>
            <Badge className="px-3 py-1 text-sm bg-primary/90 hover:bg-primary">Express.js</Badge>
            <Badge className="px-3 py-1 text-sm bg-primary/90 hover:bg-primary">Artificial Intelligence</Badge>
            <Badge className="px-3 py-1 text-sm bg-primary/90 hover:bg-primary">Machine Learning</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
