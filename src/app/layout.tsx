import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://staria-landing.adrielzimbril.com"),
  title: "Staria | AI-Powered Social Media Content Factory",
  description:
    "Day 7/30 of the AI-Generated Landing Page Challenge. Staria is a conceptual AI-powered social media content factory that helps creators and agencies scale their presence with automated creative workflows.",
  keywords: [
    "Staria",
    "AI content generation",
    "social media automation",
    "AI content factory",
    "content creation tool",
    "automated creative workflow",
    "Next.js",
    "React",
    "Tailwind CSS",
    "bento design",
    "AI challenge",
  ],
  openGraph: {
    title: "Staria | AI-Powered Social Media Content Factory",
    description:
      "A conceptual AI content generation landing page for Day 7/30 of the AI-Generated Landing Page Challenge.",
    url: "https://staria-landing.adrielzimbril.com",
    siteName: "Staria",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Staria landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staria | AI-Powered Social Media Content Factory",
    description:
      "A conceptual AI content generation landing page for Day 7/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
