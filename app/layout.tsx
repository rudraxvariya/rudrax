import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Rudrax Variya — Full-Stack Developer",
  description:
    "Portfolio of Rudrax Variya — Full-Stack Developer at Bacancy Technologies. React · Next.js · Node.js · TypeScript · 5+ years of experience.",
  keywords: ["Rudrax Variya", "Full Stack Developer", "React Developer", "Next.js", "Ahmedabad", "India", "GetGround"],
  openGraph: {
    title: "Rudrax Variya — Full-Stack Developer",
    description: "Full-Stack Developer. React · Next.js · Node.js · TypeScript.",
    type: "website",
    url: "https://rudraxvariya.github.io",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rudrax_variya",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("dark", spaceGrotesk.variable, jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="noise">
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
