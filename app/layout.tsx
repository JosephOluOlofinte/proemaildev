import type { Metadata } from "next";
import { Atkinson_Hyperlegible, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import "../styles/boilerplate.css";
import Header from "@/components/static/Header";
import Footer from "@/components/static/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--atkinson"
});

const dmSans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--dmSans"
});

export const metadata: Metadata = {
  title: "Pro Email Developer",
  description: "I specialize in crafting pixel-perfect HTML email templates that are responsive, accessible, and cross-client compatible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkinson.className} ${dmSans.className} `}
      >
        <Header />
          {children}
          <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
