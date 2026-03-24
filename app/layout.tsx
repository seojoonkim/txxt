import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "txxt — The Chain Where Agents Are Born",
  description: "The first public blockchain built from the ground up for AI agents. Identity. Reputation. Validation. Native.",
  openGraph: {
    title: "txxt — Agent-Native Blockchain",
    description: "No token. No speculation. Just infrastructure for AI agents.",
    siteName: "txxt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen bg-[#080810] text-white antialiased" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
