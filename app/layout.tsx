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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "txxt — The Agent Layer for Every Blockchain",
  description: "The middleware that makes any blockchain agent-ready. x402 payments. ERC-8004 identity. Works on Ethereum, Solana, Base, and more.",
  openGraph: {
    title: "txxt — The Agent Layer for Every Blockchain",
    description: "txxt doesn't replace your blockchain. It makes your blockchain agent-ready.",
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
      <body className="min-h-screen bg-white text-white antialiased" style={{
        overflowX: "hidden",
        maxWidth: "100vw",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
      }}>
        <Nav />
        <main style={{ width: "100%", overflowX: "hidden", paddingTop: "62px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
