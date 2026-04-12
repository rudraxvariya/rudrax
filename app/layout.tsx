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
  metadataBase: new URL("https://rudraxvariya.github.io"),
  title: {
    default: "Rudrax Variya — Frontend Engineer | React & Next.js Developer",
    template: "%s | Rudrax Variya",
  },
  description:
    "Rudrax Variya is a Frontend-focused Software Engineer from Ahmedabad, India with 5+ years of experience building scalable web applications using React, Next.js, TypeScript, and Node.js. Currently at Bacancy Technology.",
  keywords: [
    "Rudrax Variya",
    "rudrax variya",
    "rudraxvariya",
    "Rudrax Variya developer",
    "Rudrax Variya portfolio",
    "Rudrax Variya React developer",
    "Rudrax Variya frontend engineer",
    "Frontend Developer Ahmedabad",
    "React Developer India",
    "Next.js Developer",
    "TypeScript Developer",
    "Bacancy Technology developer",
    "Software Engineer Ahmedabad",
    "Software Engineer Gujarat",
    "LDRP ITR graduate",
    "Web Developer India",
  ],
  authors: [{ name: "Rudrax Variya", url: "https://rudraxvariya.github.io" }],
  creator: "Rudrax Variya",
  publisher: "Rudrax Variya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rudraxvariya.github.io",
    siteName: "Rudrax Variya",
    title: "Rudrax Variya — Frontend Engineer | React & Next.js Developer",
    description:
      "Rudrax Variya — Frontend-focused Software Engineer with 5+ years of experience. Specializing in React, Next.js, TypeScript. Based in Ahmedabad, India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rudrax Variya — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudrax Variya — Frontend Engineer | React & Next.js Developer",
    description:
      "Frontend-focused Software Engineer with 5+ years of experience. React, Next.js, TypeScript. Based in Ahmedabad, India.",
    creator: "@rudrax_variya",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rudraxvariya.github.io",
  },
  verification: {
    google: "", // add your Google Search Console verification token here
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
      <head>
        <link rel="canonical" href="https://rudraxvariya.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rudrax Variya",
              url: "https://rudraxvariya.github.io",
              image: "https://rudraxvariya.github.io/profile.jpg",
              sameAs: [
                "https://linkedin.com/in/rudrax-variya-4675a1142",
                "https://github.com/rudraxvariya",
                "https://twitter.com/rudrax_variya",
                "https://medium.com/@variya.rudrax",
              ],
              jobTitle: "Frontend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Bacancy Technology",
                url: "https://bacancy.com",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "L.D.R.P. Institute of Technology and Research",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gandhinagar",
                  addressRegion: "Gujarat",
                  addressCountry: "IN",
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              email: "variya.rudrax@gmail.com",
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Redux",
                "GraphQL",
                "Tailwind CSS",
                "Frontend Development",
                "Web Development",
              ],
              description:
                "Rudrax Variya is a Frontend-focused Software Engineer from Ahmedabad, India with 5+ years of experience building scalable web applications.",
            }),
          }}
        />
<meta name="google-site-verification" content="7_malGJBCFcbN743h9PCVO__bwP_odqlAC8i1p51XHU" />      </head>
      <body suppressHydrationWarning className="noise">
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
