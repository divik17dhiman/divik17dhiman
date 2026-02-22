import type React from "react"
import { Rajdhani, IBM_Plex_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani"
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex"
})

export const metadata = {
  title: "SYS.INIT // Divik Dhiman",
  description: "Systems Engineer // Core Architecture & Low-Level Implementation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistMono.variable} ${rajdhani.variable} ${ibmPlexSans.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased bg-system-grid min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
        {/* Top System Bar */}
        <header className="w-full border-b border-border bg-background/95 backdrop-blur-sm z-50 sticky top-0">
          <div className="container flex h-12 items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-wider">
            <div className="flex items-center gap-4">
              <span className="text-primary font-bold">AEGIS_OS v2.0.4</span>
              <span className="hidden sm:inline-block">SYS.STAT: OPTIMAL</span>
            </div>
            <div className="flex items-center gap-4">
              <span>USR: DIVIK.DHIMAN</span>
              <span className="hidden sm:inline-block">LOC: CLOUD</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 relative z-10 w-full">
          {children}
        </main>

        {/* Bottom Status Bar */}
        <footer className="w-full border-t border-border bg-background/95 backdrop-blur-sm z-50 mt-auto">
          <div className="container flex h-8 items-center justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            <span>SECURE CONNECTION ESTABLISHED</span>
            <span className="font-mono">
              TERMINAL READY
              <span className="inline-block ml-0.5 animate-[terminal-blink_1s_steps(1,start)_infinite]">
                ___
              </span>
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}