import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-title",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Janiarithvika Simma | AI Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Janiarithvika Simma - Specializing in AI/ML, Backend Engineering, Full Stack Web Platforms, and Distributed Systems.",
  keywords: [
    "Janiarithvika Simma",
    "AI Software Engineer",
    "Full Stack Developer",
    "Computer Science Student",
    "Machine Learning",
    "Deep Learning",
    "Spring Boot",
    "Next.js",
  ],
  authors: [{ name: "Janiarithvika Simma" }],
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen text-foreground bg-background`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
