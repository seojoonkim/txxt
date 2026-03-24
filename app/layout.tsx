import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#080810] text-white antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
