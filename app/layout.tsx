import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Eric Mwangi Kinyua | Web Developer & Designer",
  description: "Portfolio of Eric Mwangi Kinyua - A versatile web developer passionate about building intuitive, modern digital experiences with React, Next.js, and Tailwind CSS.",
  keywords: ["Web Developer", "Designer", "IT Support", "React", "Next.js", "Tailwind CSS", "TypeScript", "Portfolio"],
  authors: [{ name: "Eric Mwangi Kinyua" }],
  openGraph: {
    title: "Eric Mwangi Kinyua | Web Developer & Designer",
    description: "Portfolio showcasing modern web development projects and skills",
    type: "website",
    locale: "en",
    siteName: "Eric Mwangi Kinyua | Web Developer & Designer",
    url: "https://ericmwangi.dev",
    images: {
      url: "https://ericmwangi.dev/og-image.png",
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
